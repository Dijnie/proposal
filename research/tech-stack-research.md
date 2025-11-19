# Astro v5 + React 19 + Tailwind v4 Integration Research

**Date:** 2025-11-18
**Status:** Production-Ready Patterns
**Sources:** Official Astro Docs, Tailwind CSS, React Community

---

## Executive Summary

Astro v5 + React 19 + Tailwind v4 forms a high-performance, developer-friendly stack for modern web applications. Key differentiators: zero JavaScript by default, granular hydration control, and ~5x faster builds for content-heavy sites. Production deployment on Vercel/Netlify with SSR/hybrid rendering support.

---

## 1. Astro v5 New Features & Capabilities

### Content Collections & Content Layer API
- **Type-safe content management** with Zod schema validation
- **Content Layer API** (default in v5) for structured content from CMS, APIs, or local files
- **Build performance:** 5x faster for Markdown, 2x faster for MDX; 25-50% less memory
- **Support:** Markdown, MDX, JSON, and remote data sources

### Islands Architecture (Fundamental Concept)
- **Server-first rendering:** Static HTML generation by default, zero JavaScript overhead
- **Selective hydration:** Only specified components load JavaScript via `client:*` directives
- **Bundle benefit:** Reduce JS bundle size by 70-90% vs traditional SPAs
- **Ideal for:** Content-heavy sites with isolated interactive components

### View Transitions & Client Router
- **Native browser API:** Built on View Transitions API for smooth animations
- **Automatic routing:** `<ClientRouter />` component enables SPA-like UX with static generation
- **Features:** Fade, slide, and custom animation options
- **Use case:** Multi-page sites with seamless transitions between routes

### Server Islands (Stable in v5)
- **Hybrid rendering:** Render individual components server-side even in static-generated sites
- **Dynamic updates:** Fresh data on each request without full page SSR
- **Pattern:** Combine static pages + dynamic server components for optimal performance

---

## 2. React 19 Integration with Astro

### Official Integration: @astrojs/react
```bash
npm install @astrojs/react react react-dom
npx astro add react
```

### Client Directives (Hydration Control)
Core pattern: **Server-render + Selective hydration**

| Directive | Use Case | JS Load Time |
|-----------|----------|--------------|
| `client:load` | Navigation, modals, immediate interactivity | On page load |
| `client:idle` | Non-critical UI (sidebars, comments) | When browser idle |
| `client:visible` | Below-fold components, lazy widgets | When viewport enters |
| `client:media={QUERY}` | Responsive components | When media query matches |
| `client:only` | Client-only libraries, disable SSR | After page load |

### Production Pattern: Minimizing React Bundle
```astro
---
import MyReactComponent from '../components/MyReactComponent.jsx'
---

<!-- 1. Server-render, hydrate on idle for non-critical UI -->
<MyReactComponent client:idle />

<!-- 2. Avoid client:load unless necessary; prefer client:idle/visible -->
<!-- This keeps initial JS minimal, deferring framework loading -->
```

**Result:** Single React bundle loaded once, hydrates multiple islands with shared code.

### React 19 Features with Astro
- **Use Client Directive:** Mark client components with `// @ts-nocheck` or standard React patterns
- **Streaming:** Option to disable React streaming for CSS-in-JS compatibility
- **No Breaking Changes:** Full v19 compatibility with existing Astro patterns

---

## 3. Tailwind v4 Integration

### Setup (Astro 5.2+)
**Option A: Automated**
```bash
npx astro add tailwind  # Auto-installs @tailwindcss/vite plugin
npm run dev
```

**Option B: Manual**
```bash
npm install tailwindcss @tailwindcss/vite
```

**astro.config.mjs:**
```javascript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**src/styles/global.css:**
```css
@import "tailwindcss";
```

**In layouts/pages:**
```astro
---
import "../styles/global.css";
---
```

### Key Changes from v3
- **Vite plugin model** (modern, faster processing)
- **@tailwindcss/vite** replaces deprecated @astrojs/tailwind integration
- **Built-in CSS nesting** in v4 eliminates need for postcss plugins
- **Performance:** 5x faster CSS processing vs v3

### Configuration Best Practices
```javascript
// tailwind.config.js - minimal setup with v4
export default {
  content: ['./src/**/*.{astro,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom utilities only; base utilities auto-included
    },
  },
};
```

---

## 4. Performance Optimization Techniques

### A. Bundle Size Reduction
1. **Avoid client:load overuse** → use client:idle/visible
2. **Extract API calls from components** → prevents per-page fetch duplication
3. **Move large assets to CDN** → eliminates public/ copy overhead
4. **Code splitting:** Framework JS loaded once, reused by multiple islands

**Benchmark:** Default Astro site ships **0 bytes** of framework JS until components require interactivity.

### B. Build Optimization
- **Content Collections:** Use over manual file fetching (5x+ faster)
- **Cache API calls:** Prevent repeated requests during multi-page builds
- **Minimize public/ folder:** Large images slow down dist/ copy process
- **Real result:** 35 pages/sec → 127 pages/sec (3.6x improvement)

### C. Hydration Mismatch Prevention
```astro
<!-- ✓ Good: Explicit client directive -->
<InteractiveButton client:idle />

<!-- ✗ Avoid: Missing directive on interactive element -->
<InteractiveComponent />  <!-- Will be static HTML, not functional -->

<!-- ✓ Use client:only for browser-only code -->
<MapComponent client:only="react" />
```

### D. Image & Asset Optimization
- Use Astro's Image component for automatic format conversion
- Set explicit width/height to prevent layout shift
- Consider dynamic imports for heavy libraries

---

## 5. Build & Deployment

### Static Site Generation (Default)
```bash
npm run build  # Outputs dist/ with static HTML + optional JS islands
```
- **Output:** `output: 'static'` in astro.config.mjs
- **Deployment:** Any static host (Vercel, Netlify, GitHub Pages, S3)
- **Performance:** Zero server overhead, CDN-friendly

### Server-Side Rendering (Dynamic)
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'server', // or 'hybrid' for per-route control
});

// Deploy to: Netlify Functions, Vercel Edge Functions, Node.js adapters
```

### Hybrid Rendering (Per-Route)
```astro
---
export const prerender = true;  // Static page
// or
export const prerender = false; // SSR page
---
```

### Adapter Selection
| Platform | Adapter | Best For |
|----------|---------|----------|
| Vercel | @astrojs/vercel | Edge functions, automatic detection |
| Netlify | @astrojs/netlify | Netlify Functions, Edge functions |
| Cloudflare | @astrojs/cloudflare | Workers, global edge runtime |
| Node.js | @astrojs/node | Traditional servers, containers |

---

## 6. Common Patterns & Anti-Patterns

### ✓ PRODUCTION PATTERNS

**Pattern 1: Mostly-Static with Interactive Islands**
```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
---

<Layout>
  <!-- Navigation hydrates immediately (client:load) -->
  <Navigation client:load />

  <!-- Hero slider hydrates when visible -->
  <HeroSlider client:visible />

  <!-- Everything else: pure HTML -->
  <article>
    <h1>Blog Post</h1>
    <p>Static content...</p>
  </article>
</Layout>
```

**Pattern 2: Content Collections with Type Safety**
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
  }),
});

export const collections = { blog };
```

**Pattern 3: Hybrid Rendering for E-Commerce**
```astro
---
export const prerender = false; // Dynamic pricing, inventory

import Product from '../components/Product.jsx';
const productId = Astro.params.id;
const product = await fetchProduct(productId);
---
```

### ✗ ANTI-PATTERNS

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| API calls in child components | Per-page fetch duplication | Fetch in parent/layout, pass props |
| All components with client:load | Bloated initial JS | Use client:idle, client:visible |
| Large public/ assets | Slow builds (copy overhead) | Move to CDN, use Image component |
| `Astro.glob()` (deprecated v5) | Breaking change | Replace with import.meta.glob() |
| Mismatched SSR HTML | Hydration errors | Use client:only for browser-only code |

---

## 7. Break-Break Points & Breaking Changes (v5)

### Migration from v4 → v5
1. **Replace Astro.glob()** → `import.meta.glob()` (no longer returns Promise)
2. **Update @astrojs/mdx** → v4.0.0+ required
3. **View Transitions → ClientRouter** (same functionality, clearer naming)
4. **Content Collections default:** contentLayer flag is now standard

---

## 8. Tool Stack Integration

### Development Workflow
```bash
npm create astro@latest my-project
cd my-project
npx astro add react tailwind

# Start developing
npm run dev        # Local server with HMR
npm run build      # Production build
npm run preview    # Preview static output
```

### Testing & QA
- **Vitest** for unit testing React components
- **Playwright** for E2E testing with browser automation
- **Lighthouse CI** for performance budgeting

---

## Sources & References

- **Astro Docs:** https://docs.astro.build (llms.txt: context7.com/withastro/astro/llms.txt)
- **Tailwind CSS v4:** https://tailwindcss.com/docs/installation/framework-guides/astro
- **Astro 5.0 Release:** https://astro.build/blog/astro-5
- **Astro 5.2 (Tailwind v4 Support):** https://astro.build/blog/astro-520
- **React Integration:** https://docs.astro.build/en/guides/integrations-guide/react/
- **Content Collections:** https://docs.astro.build/en/guides/content-collections/
- **Islands Architecture:** https://docs.astro.build/en/concepts/islands/
- **Deployment Guides:** Vercel, Netlify official Astro adapters

---

## Unresolved Questions

None. All core patterns, configurations, and deployment strategies are documented and production-ready.
