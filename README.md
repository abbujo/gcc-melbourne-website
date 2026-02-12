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

## 🎨 Design Policy & Styling Guide

This project follows a strict design policy to ensure visual consistency, accessibility, and a premium "Corporate Clean" aesthetic. All new components must adhere to these rules.

### 1. Color System & Tokens
**Source of Truth**: `src/styles/base/tokens.css`

*   **Brand Colors**:
    *   `var(--brand-green)` (#2e7d32): Primary action color, trust indicators, checkmarks.
    *   `var(--brand-teal)` (#006d75): Links, accents, slight gradient overlays.
    *   `var(--brand-dark)` (#1f2933): Headings, heavy text, slate backgrounds.

*   **Background Strategy (Alternating System)**:
    Sections should alternate backgrounds to create rhythm (Rhythm: A-B-A-B).
    *   **Background A (Main)**: `var(--bg-main)` (White). Used for content-heavy sections like Services, Why Us.
    *   **Background B (Surface)**: `var(--bg-surface)` (Slate 50 / #f8fafc). Used for "break" sections like Testimonials, Areas, CTA.
    *   **Highlight**: `var(--bg-green-subtle)` (#f0fdf4). Used for Heros or special call-out cards.

### 2. Typography
*   **Headings**: `Montserrat`, Weights 700/800. Color: `var(--brand-dark)`.
    *   *Style*: Tight letter-spacing (-0.02em), high contrast.
*   **Body**: `Inter` / System Sans. Color: `var(--text-muted)`.
    *   *Style*: Line-height 1.6 for readability.
*   **Eyebrows/Badges**: Uppercase, Bold (700), Tracking 0.05em. Color: `var(--brand-teal)`.

### 3. Component Architecture

#### Cards (Services, Features, Reviews)
*   **Background**: Always White (`#ffffff`) regardless of section background.
*   **Border**: `1px solid var(--border-soft)`.
*   **Shadow**:
    *   *Idle*: `0 4px 6px -1px rgba(0,0,0,0.05)` (Subtle).
    *   *Hover*: Lift effect (`translateY(-4px)`) + Deeper Shadow.
*   **Accents**:
    *   **Desktop**: Top Border `4px solid var(--brand-green)` (e.g., Service Cards).
    *   **Mobile**: Left Border `4px solid var(--brand-green)` (List View).

#### Buttons
*   **Primary**: Pill Shape (`rounded-full`), Background `var(--brand-green)`, Text White.
    *   *Hover*: Darker Teal or Green mix.
*   **Secondary/Outline**: Transparent, Border `1px solid var(--border-soft)`, Text `var(--brand-dark)`.
*   **Text Link**: `var(--brand-teal)`, Underlined, Font Weight 600.

#### Icons & Visuals
*   **Icon Containers**: Square with rounded corners (`rounded-xl`), Background `var(--bg-green-subtle)`, Icon Color `var(--brand-green)`.
*   **Images**: All functional images use `SmartImage.astro`.
    *   *Radius*: `2rem` (32px) for large feature images.
    *   *Overlays*: Gentle gradients (`rgba(0,0,0,0.2)`) to ensure text readability if overlaid.

### 4. Spacing & Layout
*   **Container**: `.gcc-container` (Max width 1280px, Padding 1.25rem).
*   **Section Padding**: `2rem 0` (Mobile) / `4rem 0` (Desktop). Keep it compact but breathable.
*   **Grids**:
    *   *Features/Bento*: 2-column on Desktop, Stack on Mobile.
    *   *Services*: Auto-fit Grid (`minmax(300px, 1fr)`).

### 5. Mobile Responsiveness
*   **Typography**: Headings scale down (~2rem).
*   **Layouts**: Complex grids (Bento, Split) stack vertically.
*   **Cards**: Switch from Vertical Cards to Horizontal List items for efficiency (`ServiceGrid`).

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
