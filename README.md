# Nikhil Goswami — Portfolio

A single-page portfolio built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS. Dark, space-themed design with an animated starfield background
and an orbit diagram representing core areas of expertise. Icons via
[lucide-react](https://lucide.dev).

## Sections

- Hero — name, role, tagline, contact shortcuts, orbit diagram
- About — professional summary and quick stats
- Experience — banking domain + early career timeline
- Expertise — core competencies grid
- Certifications & Tools — certifications, technical tools, languages
- Education — degrees
- Contact — email / phone / LinkedIn / location, with copy-to-clipboard

All resume content lives in `lib/data.ts` — edit that file to update copy
without touching component markup.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project, accept the defaults — Vercel
auto-detects Next.js). Run `vercel --prod` to push to production.

**Option B — Git + Vercel dashboard**

1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**.

## Customizing

- **Colors / fonts**: `tailwind.config.ts` (`space`, `text`, `accent` color
  tokens) and `app/layout.tsx` (Space Grotesk + Inter via `next/font`).
- **Content**: `lib/data.ts`.
- **Resume file**: replace `public/resume.pdf` with an updated version (keep
  the filename, or update the `href` in `components/Header.tsx` and
  `components/Hero.tsx`).
- **Starfield / orbit animation**: `components/GalaxyBackground.tsx` and
  `components/OrbitDiagram.tsx`. Both respect `prefers-reduced-motion`.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
