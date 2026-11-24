# Alsaf portfolio

This portfolio uses Astro for static pages, TypeScript for content, plain CSS for the theme, and Motion for the desktop hero parallax and project reveal. [DESIGN.md](DESIGN.md) is the brief for building the full portfolio.

## Run it locally

```sh
npm ci
npm run dev
```

Open the URL printed by Astro. Use `npm run check` to check the Astro and TypeScript files, and `npm run build` to generate the deployable site in `dist/`.

## Edit the portfolio

| Change | Where |
| --- | --- |
| Colors, fonts, sizes, line heights, borders, and section spacing | [`src/styles/theme.css`](src/styles/theme.css) |
| Name, intro, bio, education, links, projects, skills, learning, and activities | [`src/content/portfolio.ts`](src/content/portfolio.ts) |
| Page structure, motion, and Fontshare stylesheet links | [`src/pages/index.astro`](src/pages/index.astro) |

The first project in the content file is featured. Replace the working name and project entry when your final content is ready. Set `portrait` to an image URL and alt text to replace the hero monogram. For a local image or résumé, put it in `public/` and reference it from the site root, for example `/portrait.webp`. Learning, activities, and contact appear when you add their content. Adjust the portrait crop with `--portrait-position` in the theme.

Layout rules live in `src/styles/portfolio.css`. The page loads Clash Display and Satoshi from Fontshare and falls back to system fonts. To change families, update the stylesheet links and font variables.
