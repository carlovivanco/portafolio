import fs from 'node:fs'
import path from 'node:path'
import type { Series } from '@/components/TrainingCurves'

/** Reads public/robotics/curves.json ({ "SAC": [[step, reward], ...], ... }) if present. */
export function loadCurves(): Series[] | null {
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/robotics/curves.json'), 'utf8')) as Record<string, [number, number][]>
    const out = Object.entries(raw).filter(([, pts]) => pts.length > 1).map(([name, points]) => ({ name, points }))
    return out.length ? out : null
  } catch {
    return null
  }
}
