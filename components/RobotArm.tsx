'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const L1 = 1.3
const L2 = 1.2
const L3 = 0.35
const H0 = 0.55 // shoulder height

type Palette = { accent: string; ink: string; rule: string; wash: string }
const readPalette = (): Palette => {
  const s = getComputedStyle(document.documentElement)
  const g = (v: string) => s.getPropertyValue(v).trim()
  return { accent: g('--accent'), ink: g('--ink'), rule: g('--rule'), wash: g('--wash') }
}

function Link({ len, r, color }: { len: number; r: number; color: string }) {
  return (
    <mesh position={[0, len / 2, 0]}>
      <cylinderGeometry args={[r, r, len, 24]} />
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.4} />
    </mesh>
  )
}

function Joint({ r, color }: { r: number; color: string }) {
  return (
    <mesh rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[r, r, r * 2.2, 24]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
    </mesh>
  )
}

function Arm({ pal, pointer, still, hud }: {
  pal: Palette
  pointer: React.MutableRefObject<{ x: number; y: number; t: number }>
  still: boolean
  hud: React.RefObject<HTMLPreElement>
}) {
  const yaw = useRef<THREE.Group>(null)
  const sh = useRef<THREE.Group>(null)
  const el = useRef<THREE.Group>(null)
  const wr = useRef<THREE.Group>(null)
  const target = useRef<THREE.Mesh>(null)
  const q = useRef({ yaw: 0, a: 0.4, b: 1.2, c: 0 })
  const tick = useRef(0)

  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime
    const idle = still || t * 1000 - pointer.current.t > 2500
    // pointer in [-1,1] → reachable workspace; idle = slow lissajous sweep
    const nx = idle ? Math.sin(t * 0.6) * 0.8 : pointer.current.x
    const ny = idle ? Math.sin(t * 0.9 + 1) * 0.5 : pointer.current.y
    const tx = nx * 1.9
    const ty = 1.5 + ny * 0.9
    const tz = 1.0 + (idle ? Math.cos(t * 0.6) * 0.3 : 0)
    target.current?.position.set(tx, ty, tz)

    // analytic 2-link IK in the vertical plane through the target, tool pointing down
    const ry = Math.atan2(tx, tz)
    const r = Math.hypot(tx, tz)
    const dy = ty + L3 - H0
    const d = THREE.MathUtils.clamp(Math.hypot(r, dy), 0.5, L1 + L2 - 0.01)
    const phi = Math.atan2(r, dy)
    const alpha = Math.acos(THREE.MathUtils.clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1))
    const gamma = Math.acos(THREE.MathUtils.clamp((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2), -1, 1))
    const a = phi - alpha
    const b = Math.PI - gamma
    const c = Math.PI - a - b

    const k = 1 - Math.pow(0.001, dt) // frame-rate independent smoothing
    const s = q.current
    s.yaw += (ry - s.yaw) * k
    s.a += (a - s.a) * k
    s.b += (b - s.b) * k
    s.c += (c - s.c) * k
    if (yaw.current) yaw.current.rotation.y = s.yaw
    if (sh.current) sh.current.rotation.x = s.a
    if (el.current) el.current.rotation.x = s.b
    if (wr.current) wr.current.rotation.x = s.c

    if (hud.current && ++tick.current % 6 === 0) {
      const deg = (v: number) => (v * 180 / Math.PI).toFixed(1).padStart(6)
      hud.current.textContent = `q1 ${deg(s.yaw)}°\nq2 ${deg(s.a)}°\nq3 ${deg(s.b)}°\nq4 ${deg(s.c)}°`
    }
  })

  return (
    <>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.55, 0.65, 0.4, 32]} />
        <meshStandardMaterial color={pal.wash} metalness={0.3} roughness={0.6} />
      </mesh>
      <group ref={yaw} position={[0, 0.4, 0]}>
        <Link len={H0 - 0.4} r={0.2} color={pal.ink} />
        <group ref={sh} position={[0, H0 - 0.4, 0]}>
          <Joint r={0.25} color={pal.accent} />
          <Link len={L1} r={0.17} color={pal.ink} />
          <group ref={el} position={[0, L1, 0]}>
            <Joint r={0.2} color={pal.accent} />
            <Link len={L2} r={0.13} color={pal.ink} />
            <group ref={wr} position={[0, L2, 0]}>
              <Joint r={0.14} color={pal.accent} />
              <Link len={L3} r={0.06} color={pal.ink} />
            </group>
          </group>
        </group>
      </group>
      <mesh ref={target}>
        <sphereGeometry args={[0.09, 16, 16]} />
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
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: 1 - (e.clientY / window.innerHeight) * 2,
        t: performance.now(),
      }
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { mo.disconnect(); window.removeEventListener('pointermove', move) }
  }, [])

  const grid = useMemo(() => pal && [pal.accent, pal.rule] as const, [pal])
  if (!pal || !grid) return null

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [3.4, 2.8, 4.6], fov: 38 }} dpr={[1, 2]} aria-label="Interactive robot arm that follows your cursor">
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} />
        <pointLight position={[-3, 2, -2]} intensity={0.6} color={pal.accent} />
        <gridHelper args={[12, 24, grid[0], grid[1]]} />
        <Arm pal={pal} pointer={pointer} still={still} hud={hud} />
        <OrbitControls
          target={[0, 1.2, 0]} enableZoom={false} enablePan={false}
          enabled={fine} minPolarAngle={0.6} maxPolarAngle={1.5}
        />
      </Canvas>
      <pre ref={hud} aria-hidden className="num absolute left-3 bottom-3 text-xs leading-5 text-muted pointer-events-none select-none" />
    </div>
  )
}
