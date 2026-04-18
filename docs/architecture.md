# Architecture

## Overview

Personal portfolio and technical blog for marco.limache.dev. Static site deployed to Cloudflare Pages/Workers edge network.

## Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | Astro 5 (static output)             |
| Styling   | Tailwind CSS                        |
| Content   | MDX (blog posts)                    |
| i18n      | Custom (ES/EN via `app/i18n/ui.ts`) |
| Deploy    | Cloudflare Pages via Wrangler       |
| IaC       | Terraform (Cloudflare provider)     |

## Project Structure

```
app/          Astro source (srcDir)
  pages/      File-based routing
  components/ Reusable Astro components
  layouts/    Base and post layouts
  content/    MDX blog posts (content collections)
  i18n/       Translation strings
  styles/     Global CSS
  public/     Static assets (publicDir)

infrastructure/
  terraform/cloudflare/   Cloudflare resources as code
  monitoring/             OTel Collector config (planned)

.github/workflows/
  deploy.yml  Push to main → build → Cloudflare Pages
  ci.yml      PR → lint + typecheck + build
```

## Data Flow

```
Browser request
  → Cloudflare Edge (CDN cache)
  → Static HTML/CSS/JS from dist/
  ← Response
```

## Observability Roadmap

Planned: OpenTelemetry browser SDK for Real User Monitoring (RUM).

- Signals: Web Vitals (LCP, CLS, INP, FCP, TTFB), navigation traces, JS errors
- Transport: OTLP/HTTP via Cloudflare Worker proxy
- Backends: Grafana Cloud (Tempo + Mimir), Prometheus, New Relic

See `infrastructure/monitoring/` for collector config (pending).
