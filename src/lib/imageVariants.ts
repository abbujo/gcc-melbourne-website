export type ImageKind = 'hero' | 'card' | 'general' | 'icon' | 'logo';

export const VARIANTS: Record<ImageKind, number[]> = {
    hero: [400, 720, 800, 1200, 1440],
    card: [320, 480, 640, 960],
    general: [320, 640, 960, 1200],
    icon: [32, 48, 64, 96, 128, 192],
    logo: [128, 192, 256, 384, 512],
};

// Map each kind to its folder path
// Assumes structure: /public/images/generated/<kind>/
const KIND_DIRECTORIES: Record<ImageKind, string> = {
    hero: 'hero',
    card: 'card',
    general: 'general',
    icon: 'icon',
    logo: 'logo',
};

/**
 * Extract the ImageKind from a filename suffix (e.g., "my_image_hero" -> "hero").
 * Defaults to "general" if no known suffix is found.
 */
export function parseImageKindFromName(name: string): ImageKind {
    const parts = name.split('_');
    const suffix = parts[parts.length - 1] as ImageKind;

    if (Object.keys(VARIANTS).includes(suffix)) {
        return suffix;
    }

    return 'general';
}

/**
 * Generates a srcset string for AVIF variants.
 * Format: /images/generated/<kind>/<name>-<width>.avif <width>w, ...
 */
export function buildSrcSet(name: string): string {
    const kind = parseImageKindFromName(name);
    const widths = VARIANTS[kind];
    const folder = KIND_DIRECTORIES[kind]; // e.g. "hero"

    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return widths
        .map((w) => `${base}/images/generated/${folder}/${name}-${w}.avif ${w}w`)
        .join(', ');
}

/**
 * Returns a sensible default src (usually middle resolution) for fallback/initial load.
 */
export function buildDefaultSrc(name: string): string {
    const kind = parseImageKindFromName(name);
    const widths = VARIANTS[kind];
    const folder = KIND_DIRECTORIES[kind];

    // Pick roughly the middle width, or a specific preference
    let defaultWidth = widths[Math.floor(widths.length / 2)];

    // Specific override preferences based on specs
    if (kind === 'hero') {
        // Prefer 800 or 720 if available, but "middle" of [400,720,800,1200,1440] is 800.
        // 800 is index 2. Math.floor(5/2) = 2. So that works out.
    }

    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${base}/images/generated/${folder}/${name}-${defaultWidth}.avif`;
}

/**
 * Returns default 'sizes' attribute string for an ImageKind.
 */
export function buildSizes(kind: ImageKind): string {
    switch (kind) {
        case 'hero':
            // Prioritize height: roughly (height * aspect_ratio)
            // Assuming standard hero aspect ratio ~16:9 or similar.
            // "100vh" means the image will be as tall as the viewport.
            // We use `auto` or a calculated width based on height to clue the browser.
            // A common pattern for "cover" style where height is key: `(min-height: 100vh) ...`
            // But `sizes` is for width selection. 
            // If the image is full height (100vh), its width will be 100vh * aspect.
            // Let's approximate typical screen aspect ratios. 
            // Landscape (desktop): 100vh * 1.77 ~= 177vh width needed.
            // Portrait (mobile): 100vh * 0.56 ~= 56vh.
            // A safer bet for "fit to height" is simply over-estimating the width needed to cover.
            return '(max-aspect-ratio: 1/1) 150vh, 100vw'; // Fallback to 100vw if we can't be clever, but 150vh implies "tall" interest.
        case 'card':
            return '(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw';
        case 'general':
            return '(max-width: 480px) 100vw, (max-width: 1024px) 80vw, 800px';
        case 'icon':
            return '64px';
        case 'logo':
            return '(max-width: 480px) 160px, 256px';
        default:
            return '100vw';
    }
}
