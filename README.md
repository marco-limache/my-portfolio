# marco.limache.dev

Personal website of Marco Limache — SRE, Cloud Architect & DevOps Engineer.

Built with **Astro 5**, **Tailwind CSS**, deployed on **Cloudflare Pages**.

---

## Quick Start

```bash
bash scripts/setup.sh   # installs dependencies
npm run dev             # dev server at http://localhost:4321
npm run build           # production build → dist/
npm run preview         # preview production build
npm run lint            # ESLint
npm run format          # Prettier
```

---

## Project Structure

```
app/                    # Astro source (srcDir)
  components/           # Nav, Footer, HomePage
  content/blog/         # MDX blog posts
  i18n/ui.ts            # ES/EN translation strings
  layouts/              # BaseLayout, PostLayout
  pages/                # File-based routing (/ ES, /en/ EN)
  styles/global.css     # Tailwind + design tokens
  public/               # Static assets (_headers, favicon)

infrastructure/
  terraform/cloudflare/ # Cloudflare resources as code
  monitoring/           # OTel Collector config (planned)

.github/workflows/
  deploy.yml            # Push to main → Cloudflare Pages
  ci.yml                # PR → lint + typecheck + build

docs/
  architecture.md       # System overview
  adr/                  # Architecture Decision Records
```

---

## Writing a New Post

Create a `.mdx` file in `app/content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'One-sentence description for SEO and blog listing.'
pubDate: 2026-04-17
tags: ['kubernetes', 'sre', 'platform-engineering']
readingTime: '8 min read'
draft: false
---

## Content here
```

Filename becomes the URL slug: `my-post.mdx` → `/blog/my-post`

---

## Deploy

Automated via GitHub Actions on push to `main`. Requires these repository secrets:

| Secret                  | Description                           |
| ----------------------- | ------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | API token with Pages write permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID            |

Manual deploy: `npm run build && npx wrangler pages deploy dist`

---

## Design System

| Token    | Value     | Usage                    |
| -------- | --------- | ------------------------ |
| `ink`    | `#0D0D0D` | Primary text, borders    |
| `paper`  | `#FAFAF8` | Background               |
| `accent` | `#C0392B` | Highlights, hover states |
| `muted`  | `#6B7280` | Secondary text, metadata |
| `border` | `#D1D1CC` | Subtle borders           |

**Fonts:** Space Grotesk (body) + DM Mono (code) via Google Fonts
