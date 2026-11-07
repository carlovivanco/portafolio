'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
import * as THREE from 'three'

// Franka Emika Panda. Meshes + kinematics from frankaemika/franka_ros (Apache-2.0).
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const NAMES = ['link0', 'link1', 'link2', 'link3', 'link4', 'link5', 'link6', 'link7', 'hand', 'finger']
const URLS = NAMES.map(n => `${base}/robotics/franka/${n}.dae`)

// Joint i frame = parent · Trans(xyz) · RotX(roll) · RotZ(q_i)  (URDF panda_arm)
const JOINTS: { xyz: [number, number, number]; roll: number }[] = [
  { xyz: [0, 0, 0.333], roll: 0 },
  { xyz: [0, 0, 0], roll: -Math.PI / 2 },
  { xyz: [0, -0.316, 0], roll: Math.PI / 2 },
  { xyz: [0.0825, 0, 0], roll: Math.PI / 2 },
  { xyz: [-0.0825, 0.384, 0], roll: -Math.PI / 2 },
  { xyz: [0, 0, 0], roll: Math.PI / 2 },
  { xyz: [0.088, 0, 0], roll: Math.PI / 2 },
]
const LO = [-2.8973, -1.7628, -2.8973, -3.0718, -2.8973, -0.0175, -2.8973]
const HI = [2.8973, 1.7628, 2.8973, -0.0698, 2.8973, 3.7525, 2.8973]
const READY = [0, -Math.PI / 4, 0, -3 * Math.PI / 4, 0, Math.PI / 2, Math.PI / 4]
const TCP = 0.107 + 0.1034 // flange + hand tip
const S = 2 // scene scale (robot is ~1 m tall)

const _m = new THREE.Matrix4()
const _t = new THREE.Matrix4()
const _r = new THREE.Matrix4()

/** Forward kinematics → [tool tip xyz, tool z-axis xyz]. */
function fk(q: number[], out: number[]) {
  _m.identity()
  JOINTS.forEach((j, i) => {
    _m.multiply(_t.makeTranslation(...j.xyz)).multiply(_r.makeRotationX(j.roll)).multiply(_r.makeRotationZ(q[i]))
  })
  const e = _m.elements
  out[0] = e[12] + e[8] * TCP; out[1] = e[13] + e[9] * TCP; out[2] = e[14] + e[10] * TCP
  out[3] = e[8]; out[4] = e[9]; out[5] = e[10]
}

/** Solve A x = b for small dense A (Gauss, partial pivot). */
function solve(A: number[][], b: number[]) {
  const n = b.length
  for (let c = 0; c < n; c++) {
    let p = c
    for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r
    ;[A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]]
    for (let r = c + 1; r < n; r++) {
      const f = A[r][c] / A[c][c]
      for (let k = c; k < n; k++) A[r][k] -= f * A[c][k]
      b[r] -= f * b[c]
    }
  }
  const x = new Array(n).fill(0)
  for (let r = n - 1; r >= 0; r--) {
    let s = b[r]
    for (let k = r + 1; k < n; k++) s -= A[r][k] * x[k]
    x[r] = s / A[r][r]
  }
  return x
}

/** One damped-least-squares step: tip → target, tool axis pointing down. */
function ikStep(q: number[], target: number[]) {
  const f0 = new Array(6), f1 = new Array(6)
  fk(q, f0)
  const W = 0.35
  const e = [target[0] - f0[0], target[1] - f0[1], target[2] - f0[2], -W * (f0[3] - 0), -W * (f0[4] - 0), -W * (f0[5] + 1)]
  const J: number[][] = Array.from({ length: 6 }, () => new Array(7).fill(0))
  for (let i = 0; i < 7; i++) {
    const qi = q[i]; q[i] = qi + 1e-4
    fk(q, f1); q[i] = qi
    for (let r = 0; r < 6; r++) J[r][i] = ((f1[r] - f0[r]) * (r < 3 ? 1 : W)) / 1e-4
  }
  const A = Array.from({ length: 6 }, (_, r) => Array.from({ length: 6 }, (_, c) => {
    let s = r === c ? 0.05 * 0.05 : 0
    for (let k = 0; k < 7; k++) s += J[r][k] * J[c][k]
    return s
  }))
  const y = solve(A, e.slice())
  for (let i = 0; i < 7; i++) {
    let dq = 0
    for (let r = 0; r < 6; r++) dq += J[r][i] * y[r]
    q[i] = THREE.MathUtils.clamp(q[i] + THREE.MathUtils.clamp(dq, -0.08, 0.08), LO[i], HI[i])
  }
}

type Palette = { accent: string; rule: string }
const readPalette = (): Palette => {
  const s = getComputedStyle(document.documentElement)
  return { accent: s.getPropertyValue('--accent').trim(), rule: s.getPropertyValue('--rule').trim() }
}

type Ptr = React.MutableRefObject<{ x: number; y: number; t: number }>

function Franka({ pal, pointer, still, hud }: { pal: Palette; pointer: Ptr; still: boolean; hud: React.RefObject<HTMLPreElement> }) {
  const colladas = useLoader(ColladaLoader, URLS)
  const meshes = useMemo(() => colladas.map(c => {
    const s = c.scene.clone()
    s.rotation.set(0, 0, 0) // loader converts Z_UP→Y_UP; we keep the URDF Z-up frame
    return s
  }), [colladas])
  const finger2 = useMemo(() => meshes[9].clone(), [meshes])

  const joints = useRef<(THREE.Group | null)[]>([])
  const target = useRef<THREE.Mesh>(null)
  const q = useRef([...READY])
  const tick = useRef(0)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const idle = still || t * 1000 - pointer.current.t > 2500
    const nx = idle ? Math.sin(t * 0.6) * 0.8 : pointer.current.x
    const ny = idle ? Math.sin(t * 0.9 + 1) * 0.6 : pointer.current.y
    // robot frame (x forward, y left, z up), metres
    const tgt = [0.5 + (idle ? Math.cos(t * 0.6) * 0.08 : 0), nx * 0.4, 0.4 + ny * 0.22]
    // robot → world: X=y, Y=z, Z=x, scaled by S
    target.current?.position.set(tgt[1] * S, tgt[2] * S, tgt[0] * S)

    for (let k = 0; k < 3; k++) ikStep(q.current, tgt)
    q.current.forEach((v, i) => { const g = joints.current[i]; if (g) g.rotation.z = v })

    if (hud.current && ++tick.current % 6 === 0) {
      hud.current.textContent = q.current.map((v, i) => `q${i + 1} ${(v * 180 / Math.PI).toFixed(1).padStart(6)}°`).join('\n')
    }
  })

  // Nested joint groups: outer = fixed URDF origin, inner = rotating joint (rotation.z)
  const chain = (i: number): React.ReactNode => {
    if (i === 7) {
      return (
        <group position={[0, 0, 0.107]} rotation={[0, 0, -Math.PI / 4]}>
          <primitive object={meshes[8]} />
          <group position={[0, 0.02, 0.0584]}><primitive object={meshes[9]} /></group>
          <group position={[0, -0.02, 0.0584]} rotation={[0, 0, Math.PI]}><primitive object={finger2} /></group>
        </group>
      )
    }
    const j = JOINTS[i]
    return (
      <group position={j.xyz} rotation={[j.roll, 0, 0]}>
        <group ref={g => { joints.current[i] = g }}>
          <primitive object={meshes[i + 1]} />
          {chain(i + 1)}
        </group>
      </group>
    )
  }

  return (
    <>
      <group scale={S} rotation={[0, -Math.PI / 2, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={meshes[0]} />
          {chain(0)}
        </group>
      </group>
      <mesh ref={target}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={pal.accent} />
      </mesh>
    </>
  )
}

export default function RobotArm() {
  const [pal, setPal] = useState<Palette | null>(null)
  const [still, setStill] = useState(false)
  const [fine, setFine] = useState(true)
  const pointer = useRef({ x: 0, y: 0, t: -1e9 })
  const hud = useRef<HTMLPreElement>(null)

  useEffect(() => {
    setPal(readPalette())
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    setFine(window.matchMedia('(pointer: fine)').matches)
    const mo = new MutationObserver(() => setPal(readPalette()))
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const move = (e: PointerEvent) => {
      pointer.current = { x: (e.clientX / window.innerWidth) * 2 - 1, y: 1 - (e.clientY / window.innerHeight) * 2, t: performance.now() }
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { mo.disconnect(); window.removeEventListener('pointermove', move) }
  }, [])

  if (!pal) return null

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [3.4, 2.6, 4.4], fov: 38 }} dpr={[1, 2]} aria-label="Franka Panda arm that follows your cursor">
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 6, 3]} intensity={2} />
        <directionalLight position={[-4, 3, -3]} intensity={0.8} />
        <pointLight position={[-3, 2, 2]} intensity={0.8} color={pal.accent} />
        <gridHelper args={[12, 24, pal.accent, pal.rule]} />
        <Suspense fallback={null}>
          <Franka pal={pal} pointer={pointer} still={still} hud={hud} />
        </Suspense>
        <OrbitControls target={[0, 0.9, 0]} enableZoom={false} enablePan={false} enabled={fine} minPolarAngle={0.6} maxPolarAngle={1.5} />
      </Canvas>
      <pre ref={hud} aria-hidden className="num absolute left-3 bottom-3 text-xs leading-5 text-muted pointer-events-none select-none" />
    </div>
  )
}
