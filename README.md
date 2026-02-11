# GCC Melbourne — Commercial Cleaning Website

This is the official website for **GCC Melbourne**, built using **Astro** with component-based architecture, custom global CSS, and SEO-first structure.

---

## 🚀 Tech Stack

- **Astro**
- **Tailwind (utility usage only)**
- **Custom global CSS system**
- **Component-based layout**
- **SEO-friendly structure**
- **Mobile-first responsive design**

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│    ├── components/
│    │ ├── Header.astro
│    │ ├── Footer.astro
│    │ ├── CTAButton.astro
│    │
│    ├── layouts/
│    │ └── Layout.astro
│    │
│    ├── pages/
│    │ ├── index.astro
│    │ ├── services/
│    │ ├── areas/
│    │ └── pricing.astro
│    │
│    ├── styles/
│    │ ├── base/
│    │ │ └── base.css
│    │ ├── components/
│    │ │ ├── header.css
│    │ │ └── buttons.css
│    │ └── global.css
│    │
│    └── assets/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## ✅ QA Checklist (Environment & SEO)

- [ ] **Development (`npm run dev`)**
  - [ ] Canonical URL shows `http://localhost:4321/gcc-melbourne-website`
  - [ ] Page source includes `<meta name="robots" content="noindex, nofollow" />`
  - [ ] `robots.txt` at `/gcc-melbourne-website/robots.txt` shows `Disallow: /`
  - [ ] Internal links prefix `/gcc-melbourne-website`

- [ ] **Staging (GitHub Pages)**
  - [ ] Canonical URL shows `https://abbujo.github.io/gcc-melbourne-website`
  - [ ] Page source includes `<meta name="robots" content="noindex, nofollow" />`
  - [ ] `robots.txt` shows `Disallow: /`
  - [ ] `og:image` is absolute (e.g. `https://abbujo.github.io/gcc-melbourne-website/og.jpg`)

- [ ] **Production (Cloudflare)**
  - [ ] Canonical URL shows `https://www.gccmelbourne.com.au/`
  - [ ] **NO** `noindex` meta tag present
  - [ ] `robots.txt` shows `Allow: /` and links to sitemap
  - [ ] JSON-LD Schema `@id` is `https://www.gccmelbourne.com.au`
  - [ ] Redirects (apex -> www) are active via `_redirects`
