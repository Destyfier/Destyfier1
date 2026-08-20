# Visa & Study Alliance Global

React + Vite site for Visa & Study Alliance Global (Bharatpur, Chitwan) — study
abroad and visa consultancy. Netlify-ready with a working consultation form
(Netlify Forms, no backend needed) and a floating WhatsApp button.

## Brand

- Palette: Navy Blue, Vibrant Orange, Charcoal, Grey, White (see `src/index.css`)
- Logo: `public/logo.png`, generated from the uploaded circular badge logo
- Contact: 056-511505 (office) · +977 9851410627 (mobile/WhatsApp)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to Netlify

Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop),
or connect the repo (build command `npm run build`, publish dir `dist` — already
set in `netlify.toml`). If your project lives inside a subfolder in your Git
repo, set **Base directory** to that folder name in Netlify's build settings.

## The consultation form

Two lead-capture forms (Hero section, both share `name="consultation"`) post to
Netlify Forms via `fetch`, with a matching hidden form in `index.html` for
Netlify's build-time bot to register the endpoint. Submissions appear under
**Site settings → Forms** in your Netlify dashboard once deployed — set up
email notifications there.

## Editing content

Brand details, stats, destinations, services, test prep, resources, the
process steps, testimonials and footer links all live in
`src/data/content.js`. Update contact info, address, or WhatsApp number there
— every component reads from this one file.

## Swapping the logo

Replace `public/logo.png` (and regenerate `public/favicon-32.png` /
`favicon-64.png` at those pixel sizes) if you get an updated brand logo.
