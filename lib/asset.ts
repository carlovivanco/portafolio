import fs from 'node:fs'
import path from 'node:path'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Public URL for a file in /public, honouring basePath. */
export const asset = (p: string) => `${base}${p}`

/** Build-time check: lets pages skip media that has not been uploaded yet. */
export const exists = (p: string) => fs.existsSync(path.join(process.cwd(), 'public', p))

/** Returns the asset URL if the file exists in /public, else null. */
export const maybe = (p: string) => (exists(p) ? asset(p) : null)
