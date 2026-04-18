# marco.limache.dev

Personal website of Marco Limache — SRE, Cloud Architect & DevOps Engineer.

Built with **Astro 5**, **Tailwind CSS**, and deployed on **Cloudflare Pages**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Nav.astro          # Fixed top nav with mobile menu
│   └── Footer.astro       # Footer with links + status
├── content/
│   ├── config.ts          # Blog collection schema
│   └── blog/              # MDX blog posts go here
├── layouts/
│   ├── BaseLayout.astro   # Root layout (head, nav, footer)
│   └── PostLayout.astro   # Blog post layout
├── pages/
│   ├── index.astro        # Home (Hero, About, Stack, Experience, Projects, Blog, Contact)
│   ├── blog/
│   │   ├── index.astro    # Blog listing page
│   │   └── [...slug].astro  # Individual post page
│   └── 404.astro
└── styles/
    └── global.css         # Tailwind directives + design tokens + prose styles
```

---

## Writing a New Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "One-sentence description for SEO and blog listing."
pubDate: 2026-04-17
tags: ["kubernetes", "sre", "platform-engineering"]
readingTime: "8 min read"
draft: false
---

## Your content here

Write in Markdown. MDX supports React/Astro components if needed.
```

The filename becomes the URL slug: `my-post.mdx` → `/blog/my-post`

---

## Updating Content

### Experience (index.astro)
Find the `experiences` array (~line 45) and update with your real company names and roles.

### Projects (index.astro)
Find the `projects` array (~line 57) and update with your real case studies.

### Contact links (Footer.astro + index.astro)
Update LinkedIn/GitHub URLs once confirmed.

---

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create a project → Connect to GitHub
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add custom domain: `marco.limache.dev`
5. Update DNS in Cloudflare: add a CNAME record pointing to your Pages project

### Environment
No environment variables required for the base setup.

---

## Design System

| Token    | Value     | Usage                        |
|----------|-----------|------------------------------|
| `ink`    | `#0D0D0D` | Primary text, borders        |
| `paper`  | `#FAFAF8` | Background                   |
| `accent` | `#C0392B` | Highlights, hover states     |
| `muted`  | `#6B7280` | Secondary text, metadata     |
| `border` | `#D1D1CC` | Subtle borders, tag borders  |

**Fonts:** Space Grotesk (body/headings) + DM Mono (code/labels) via Google Fonts
