# Visa & Study Alliance Global

A React + Vite marketing site for a study-abroad / visa consultancy, built with
Framer Motion for interaction and a hidden Netlify Forms integration so the
consultation form works with zero backend code.

## Design

Motif: the travel document. Ink-navy + brass foil + a single stamp-red accent,
set in Fraunces (display serif) and IBM Plex Mono (codes/data) over Inter
(body). The signature device is the dashed "ink stamp" circle, reused for
stats, the boarding-pass hero, and the testimonial stamps.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to Netlify

**Option A — drag and drop**
1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist/` folder in.

**Option B — connect the repo (recommended)**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: `npm run build` — Publish directory: `dist` (already set in `netlify.toml`).
4. Deploy.

## The consultation form

The form on the site posts to Netlify Forms via `fetch`, with a matching hidden
`<form>` in `index.html` so Netlify's build-time bot can detect and register
it. Once deployed on Netlify, submissions will appear under
**Site settings → Forms** in your Netlify dashboard, and you can wire up
email notifications there — no server code needed. It won't capture
submissions on other hosts (Vercel, GitHub Pages, etc.) since this is a
Netlify-specific feature.

## Editing content

Almost all copy (stats, destinations, services, journey steps, testimonials,
partners, branches, footer links) lives in `src/data/content.js` — edit that
file rather than hunting through components.
