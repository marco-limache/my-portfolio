# ADR 0002: Cloudflare Pages for Deployment

**Status:** Accepted  
**Date:** 2025-01

## Context

Static site needs global CDN distribution, custom domain, HTTPS, and edge compute capability for future dynamic features (OTel proxy worker).

## Decision

Deploy to Cloudflare Pages/Workers via `wrangler.toml`.

## Consequences

**Positive:**

- Global CDN with 200+ PoPs — low latency worldwide
- Free tier covers this site's traffic
- Workers enable edge compute for OTel CORS proxy without separate infra
- Native integration with Cloudflare Analytics Engine (future)

**Negative:**

- Vendor lock-in for edge features (Workers, Analytics Engine)
- `wrangler.toml` must stay at project root for default Wrangler CLI behavior
