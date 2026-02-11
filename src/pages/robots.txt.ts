import type { APIRoute } from 'astro';
import { noIndex, siteUrl, withBase } from '../lib/site';

const getRobotsTxt = () => {
    const sitemapUrl = new URL(withBase('/sitemap-index.xml'), siteUrl).href;

    const robots = `
User-agent: *
${noIndex ? 'Disallow: /' : 'Allow: /'}

${!noIndex ? `Sitemap: ${sitemapUrl}` : ''}
`.trim();

    return robots;
}

export const GET: APIRoute = () => {
    return new Response(getRobotsTxt(), {
        headers: { 'Content-Type': 'text/plain' },
    });
};
