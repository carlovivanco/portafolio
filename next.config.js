/** @type {import('next').NextConfig} */
// Set NEXT_PUBLIC_BASE_PATH="" when the site moves to carlovivanco.github.io
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/portafolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
