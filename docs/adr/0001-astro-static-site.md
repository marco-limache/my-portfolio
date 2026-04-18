# ADR 0001: Astro as Static Site Generator

**Status:** Accepted  
**Date:** 2025-01

## Context

Need a personal portfolio and technical blog. Requirements: fast page loads, bilingual (ES/EN), MDX for rich blog content, minimal runtime dependencies.

## Decision

Use Astro 5 with static output mode.

## Consequences

**Positive:**

- Zero-JS by default, excellent Core Web Vitals
- File-based routing maps cleanly to URL structure
- Content Collections API for type-safe MDX blog posts
- Native i18n support via file structure (`/` ES, `/en/` EN)

**Negative:**

- No server-side runtime — dynamic features (search, comments) require external services or edge functions
- Content layer cache in `node_modules/.astro/` must be cleared when changing `srcDir`
