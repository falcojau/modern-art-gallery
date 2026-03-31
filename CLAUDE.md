# Modern Art Gallery

A responsive multi-page website for a fictional art gallery, built as a Tailwind CSS v4 learning exercise (ConquerBlocks master course).

Live site: https://falcojau.github.io/modern-art-gallery/

## Tech stack

- **Vite** — dev server and bundler
- **Tailwind CSS v4** — utility-first styling via PostCSS
- **Vanilla HTML** — no JS framework; each page is a standalone `.html` file

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
index.html        # Home page
location.html     # Location page (map + address)
artists.html      # Artists page (painter bios)
src/
  style.css       # Tailwind imports + all custom utilities and theme tokens
  main.js         # Vite entry (minimal, not loaded by HTML pages directly)
images/
  index/          # Images for the home page
  location/       # Map image for the location page
  *.svg           # Shared icons (arrows, social logos)
```

## Design system (src/style.css)

All custom design tokens and utilities are defined with Tailwind v4's `@theme` and `@utility` directives — do not add arbitrary values inline if a token already exists.

| Token / Utility | Value / Purpose |
|---|---|
| `--color-gold` | `#D5966C` — accent colour |
| `--color-almost-black` | `#151515` — primary dark background |
| `--color-dark-grey` | `#444444` — secondary dark |
| `--font-bigshoulders` | Big Shoulders — headings |
| `--font-outfit` | Outfit — body text |
| `title-hero` | 7xl bold uppercase, tight line-height |
| `title-hero-xl` | 8xl black uppercase (hero only) |
| `text-body` | Outfit 2xl extralight, dark-grey, lh 1.6 |
| `stack-sm/md/lg` | Vertical margin spacing helpers |
| `btn-hero` | Two-part button (dark content + gold arrow) with hover swap animation |
| `icon-social` | SVG mask-based social icon, scales on hover |

## Adding a new page

1. Create the `.html` file in the project root.
2. Add it as an entry in `vite.config.js` under `rollupOptions.input`.
3. Link a back button using the existing `btn-hero` pattern (see `location.html`).
4. Reuse the shared footer block from any existing page.

## Deployment

GitHub Actions deploys automatically to GitHub Pages on push to `main`. The Vite base is set to `/modern-art-gallery/` in `vite.config.js` — do not change this.
