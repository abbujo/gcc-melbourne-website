# GCC Melbourne Website

Official website for **Green Commercial Cleaning (GCC) Melbourne**, built to deliver high-performance lead generation, strong SEO foundations, and a premium user experience for commercial cleaning clients in Melbourne.

## 🎯 About This Project

This project maps the digital presence of a commercial cleaning business, focusing on:
-   **Performance**: Static site generation (SSG) for ultra-fast load times.
-   **SEO**: Structured data (Schema.org), canonical URL management, and optimized meta tags.
-   **CRO**: Strategic call-to-action placement, trust strips, and mobile-optimized sticky actions.

## ✨ Key Features

-   **Environment Awareness**: Distinct configurations for Dev, Staging (GitHub Pages), and Production.
-   **Smart SEO**:
    -   Automatic `noindex` on non-production environments.
    -   Dynamic `robots.txt` generation.
    -   `LocalBusiness` JSON-LD schema integration.
-   **Robust Routing**: Handles base paths safely (e.g., for GitHub Pages subdirectories).
-   **Design System**: Centralized CSS variables for brand colors, typography, and spacing combined with Tailwind CSS v4.
-   **Optimized Assets**: Local font hosting (@fontsource) and optimized image handling.

## 🏗️ Architecture Overview

The site is built with **Astro v5** and **Tailwind CSS v4**.

-   **Routing**: File-based routing in `src/pages`.
-   **Layouts**: `BaseLayout.astro` wraps all pages, handling `TopHead` metadata, fonts, global headers, and footers.
-   **Styling**: Hybrid approach using Tailwind utility classes + CSS variables defined in `src/styles/base/tokens.css`.
-   **Configuration**: Centralized logic in `src/lib/site.ts` regulates URLs and indexing rules based on `.env` files.

## 🎨 Brand & UI Theme

The design system uses CSS variables exposed in `:root`.

**Typography**
-   Primary headers: **Montserrat**
-   Body/UI: **Inter**

**Color Palette**
```css
/* src/styles/base/tokens.css */
:root {
  --brand-green: #2e7d32; /* Primary action color */
  --brand-teal: #006d75;  /* Secondary accent */
  --brand-dark: #1f2933;  /* Text & Contrast */
  --bg-surface: #f8fafc;  /* Light backgrounds */
}
```

**UI Tokens**
-   **Radius**: `1rem` (xl) for cards, `1.25rem` (2xl) for large containers.
-   **Header Height**: `92px` (mobile) / `96px` (desktop).

## 📂 Directory Structure

```text
src/
├── components/        # Reusable UI (Card.astro, CTAButton.astro)
│   ├── home/          # Homepage-specific sections
│   ├── SEO/           # Schema and Head components
│   └── ...
├── layouts/           # BaseLayout.astro, Layout.astro
├── lib/               # Utilities (site.ts for config logic)
├── pages/             # Route definitions
│   ├── areas/         # Location-based landing pages
│   ├── services/      # Service offerings
│   ├── robots.txt.ts  # Dynamic robots generation
│   └── index.astro    # Homepage
└── styles/            # Global CSS and Design Tokens
    ├── base/          # tokens.css, reset
    └── global.css     # Main entry point
```

## 🌍 Environments & URLs

Configuration is managed via `.env` files and `src/lib/site.ts`.

| Environment | URL | Indexing | Config File |
| :--- | :--- | :--- | :--- |
| **Development** | `http://localhost:4321` | Allowed | `.env.development` |
| **Staging** | `https://abbujo.github.io/gcc-melbourne-website` | **NoIndex** | `.env.staging` |
| **Production** | `https://www.gccmelbourne.com.au` | Allowed | `.env.production` |

**Note**: Canonical URLs automatically adjust to the correct hostname (`PUBLIC_CANONICAL_HOST`), ensuring no duplicate content issues.

## 🚀 Getting Started

Ensure you have **Node.js** installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Local Preview of Build
```bash
npm run preview
```

## 📦 Deployment

The project is configured for static output (`output: 'static'` in `astro.config.mjs`).

-   **Staging**: Deploys to **GitHub Pages**. The `base` path handling in `astro.config.mjs` ensures assets load correctly on subpaths (e.g., `/gcc-melbourne-website`).
-   **Production**: Deploys to custom domain root.

## 📝 Notes for Contributors

-   **Linting**: Strict TypeScript config is enabled.
-   **Style Changes**: Update design tokens in `src/styles/base/tokens.css` rather than hardcoding magic values.
-   **SEO**: Global meta defaults are managed in `src/components/SEO.astro`.
