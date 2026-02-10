# Generated Images

This folder contains automatically generated AVIF image variants for responsive loading.

## Folder Structure
Images are organized by "kind":
- `/hero/`: Hero images (e.g. main landing page banners)
- `/card/`: Service or feature cards
- `/general/`: General content images
- `/icon/`: Small icons
- `/logo/`: Logos

## Naming Convention
Files must follow this pattern to be detected by the `SmartImage` component:
`<baseName>_<kind>-<width>.avif`

Example:
- `office_hero-400.avif`
- `office_hero-800.avif`
- `team_card-320.avif`

## How to use in code
Use the `<SmartImage />` component:
```astro
<SmartImage name="office_hero" alt="..." />
```
The component automatically detects the kind from the name suffix (`_hero`) to generate the correct `srcset` and `sizes`.

## Missing Images?
If you see a console warning or broken image, ensure the generated files exist in the correct subdirectory with the correct naming scheme.
