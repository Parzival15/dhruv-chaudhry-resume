# Dhruv Chaudhry — résumé site

Personal résumé / portfolio site. Built with **Vite + React** (vanilla JS, no TypeScript). No backend, no CMS — content lives in one file.

## Run locally

```bash
npm install
npm run dev      # start dev server (hot reload)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

Almost everything you'd want to change — bio, jobs, skills, education, hobbies, contact info, the hero typewriter phrases — lives in **`src/data.js`**. Edit that file and the page updates; you rarely need to touch the components.

## Structure

```
src/
  data.js              ← all résumé content (edit this)
  App.jsx              ← composition + global hooks
  index.css            ← all styling (amber-on-dark theme)
  components/          ← one file per section + reusable bits
  hooks/               ← scroll reveal, scroll progress, cursor glow
```

## Résumé PDF

The "Download résumé" button is a placeholder. Drop a PDF in `public/`
(e.g. `public/dhruv-chaudhry-resume.pdf`) and point the link in
`src/components/Hero.jsx` at `import.meta.env.BASE_URL + 'dhruv-chaudhry-resume.pdf'`.

## Deploy

Any static host. For GitHub Pages, `vite.config.js` uses a relative `base`
so the build works from a project subpath out of the box.
