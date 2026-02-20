# EDLAC Algorithm Website

Premium, SEO-optimized corporate website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production build (static export)

```bash
npm run build
```

This project uses Next.js static export and outputs deployable files to `out/`.

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy-gh-pages.yml`.

### Important
- If your repository name is `EDLAC-Website` and you are using **Project Pages**, keep:
  - `NEXT_BASE_PATH=/EDLAC-Website` in the workflow.
- If you use a **custom domain** or **User/Org Pages**, set `NEXT_BASE_PATH` to an empty value.

GitHub Pages should then serve `out/index.html` automatically through the workflow artifact deployment.
