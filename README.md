# Lumma Creative Studio

Public website for Lumma Creative Studio, built as a static Astro site and deployed to GitHub Pages.

## Architecture

The site is organised around Lumma Creative Studio and the Aya learning universe. Current public areas include Lumma information, Aya projects, products, resources, collaboration, team, and contact pages.

The public repository must not contain confidential business-plan material, private contact information, credentials, API keys, unpublished commercial strategy, or internal financial information.

## Technology

- Astro static generation
- TypeScript
- CSS with responsive layouts and system light/dark colour preferences
- GitHub Pages deployment through GitHub Actions

## Local development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## GitHub Pages

GitHub Pages should use **GitHub Actions** as its deployment source. The Astro configuration uses the repository path as the site base because this project is published under the repository URL.

## Design and accessibility

The site uses one shared spacing, typography, colour, interaction, and responsive system. Theme selection follows the user's system preference. Interactive controls provide visible keyboard focus and responsive layouts are designed for desktop, tablet, and mobile viewports.

For design and accessibility decisions, use current Astro documentation, MDN Web Docs, W3Schools as a practical reference, and WCAG 2.2 as the accessibility standard.

© 2026 Lumma Creative Studio. All rights reserved.
