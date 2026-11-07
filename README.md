# Portfolio — Carlo Vivanco

Personal portfolio for a robot learning engineer: an interactive 3D Franka Panda in the hero, current work, projects (with a dissertation page), experience, education and skills.

Live: https://carlovivanco.github.io/portafolio/

## Stack

- Next.js 14 (App Router), static export (`output: 'export'`)
- Tailwind CSS 3, Bricolage Grotesque + JetBrains Mono (`next/font`)
- three.js via `@react-three/fiber` / `drei` for the hero arm, `framer-motion` for entry animations
- Light theme by default, dark via `data-theme="dark"` (saved in `localStorage`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000/portafolio/
npm run build    # static site in ./out
```

The site is served under the `/portafolio` base path, so open `/portafolio/`, not `/`.

## Where things live

| What | Where |
|---|---|
| Name, email, links | `lib/site.ts` |
| Projects (text, metrics, media paths) | `lib/projects.ts`, rendered by `components/Projects.tsx` |
| "What I'm working on" (update monthly) | `components/Now.tsx` |
| Experience / Education / Skills | `components/Experience.tsx`, `Education.tsx`, `Skills.tsx` |
| Colors and theme tokens | CSS variables in `app/globals.css`, mapped in `tailwind.config.js` |
| Dissertation page | `app/thesis/` |
| Images, videos, CV | `public/` |

## Media

- `public/robotics/hri.mp4` is the Human-Robot Interaction demo. It is played unmuted with controls, so it must keep its audio track (re-export it with AAC audio if you replace it). `hri.jpg` is its poster.
- Media is optional: `lib/asset.ts` (`maybe`) skips any file that is not in `public/`, so a missing video or poster does not break the build.
- `public/cv.pdf` powers the "Download CV" button and the command palette entry.
- `public/robotics/franka/` holds the Franka Panda meshes used by the hero (see `LICENSE-franka_ros.txt` there).

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | `/portafolio` | Base path. Set to an empty string when the site moves to `carlovivanco.github.io` (user site). |
| `NEXT_PUBLIC_SITE_URL` | `https://carlovivanco.github.io` | Base URL for Open Graph / Twitter metadata. |

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm run build`, then the `out/` folder is published to GitHub Pages.
