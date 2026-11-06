# React with Next.js — Portfolio Checkpoint

A complete, responsive portfolio website built with **Next.js 15 (App Router), React 19, and TypeScript**. The visual direction is intentionally light and editorial: warm off-white backgrounds, oversized typography, cobalt blue, orange, and lime accents, large imagery, and full-width sections rather than small centered cards.

> The portfolio uses fictional sample identity/content ("Alex Morgan"). Replace the name, biography, email, links, and project details with your own information before publishing.

## What is included

- Home page with a full-height hero, visual artwork, selected work, and contact call-to-action.
- About page with biography and working principles.
- Projects page with four project entries and locally stored project artwork.
- Contact page with a direct email link and social links.
- Shared header and footer components.
- Responsive layout for desktop, tablet, and mobile.
- Local SVG artwork displayed using `next/image`.
- Metadata for page titles and descriptions.
- App Router pages are Server Components by default, so the page content is rendered on the server.
- TypeScript configuration and ESLint configuration.

## 1. Getting started


```bash
npm install
npm run dev
```



## 2. Project structure

```text
react-nextjs-portfolio-checkpoint/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ProjectCard.tsx
│   ├── SectionHeading.tsx
│   ├── SiteFooter.tsx
│   └── SiteHeader.tsx
├── data/
│   └── projects.ts
├── public/
│   └── images/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 3. How the checkpoint requirements are met

### Requirement 1 — Getting started with Next.js
The project is configured as a Next.js App Router application. Shared reusable components are in `components/`, route files are in `app/`, and global styles are in `app/globals.css`.

### Requirement 2 — Styling components and displaying images
The website uses a global CSS file with responsive layouts, custom colors, typography, spacing, hover states, and mobile breakpoints. Project visuals and the profile illustration are SVG files in `public/images/`. They are displayed with Next.js's `Image` component.

### Requirement 3 — Page-based routing
The App Router uses folders and `page.tsx` files:
- `/` — Home
- `/about` — About
- `/projects` — Projects
- `/contact` — Contact

The shared navigation uses `next/link` for client-side navigation.

### Server-side rendering
The route components are Server Components by default because they do not use the `"use client"` directive. Next.js can render their content on the server. The home page and project pages also import project data on the server.

### Deployment
The project can be deployed to Vercel or another platform that supports Next.js.

## 4. Personalize before submission

Search the project for `Alex Morgan`, `hello@example.com`, and the sample project descriptions. Replace them with your own:
- Name and short professional introduction.
- Profile image or a personal illustration.
- Real projects, descriptions, technologies, and screenshots.
- Working email address and social profile URLs.





## 5. Verify the project

```bash
npm run build
npm run start
```

The production site will be available at http://localhost:3000.

You can also run:

```bash
npx tsc --noEmit
npm run lint
```


Vercel will build and host the site. Each new push to the connected GitHub branch can trigger a new deployment.

## 7. Push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "Build Next.js portfolio checkpoint"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

