export const envName = import.meta.env.PUBLIC_ENV_NAME || 'development';
export const noIndex = import.meta.env.PUBLIC_NO_INDEX === 'true';
export const basePath = import.meta.env.PUBLIC_BASE_PATH || '';
export const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321';
export const canonicalOrigin = import.meta.env.PUBLIC_CANONICAL_HOST || siteUrl;

/**
 * Joins basePath + path safely
 */
export function withBase(path: string): string {
    if (!path) return `${basePath}`;
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    return `${basePath}${path}`;
}

/**
 * Returns absolute URL using the canonical origin
 * Useful for OG images, canonical links, JSON-LD
 */
export function absoluteUrl(path: string): string {
    // If path is already absolute, return it
    if (path.startsWith('http')) return path;

    return new URL(withBase(path), canonicalOrigin).href;
}

/**
 * Returns the canonical URL for the current page
 * 
 * @param currentPathname Astro.url.pathname (usually includes basePath in dev/staging)
 */
export function canonicalUrl(currentPathname: string): string {
    // In Cloudflare/Vercel/Netlify, Astro.url.pathname usually includes the base path if set in astro.config.
    // We want to ensure we construct a URL based on our DEFINED canonical origin.

    // If we are in an environment where base path is required (dev/staging on github pages),
    // ensure the pathname includes it.

    // However, we must be careful not to double-add base path if Astro.url.pathname already has it.
    // OR if we are generating for production (basePath empty), we must ensure it's NOT there.

    // Simplest approach: using new URL(pathname, origin)
    // Warning: If pathname is missing base but origin demands it (unlikely if we trust Astro.url.pathname)

    return new URL(currentPathname, canonicalOrigin).href;
}
