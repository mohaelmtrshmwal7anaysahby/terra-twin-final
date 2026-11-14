# Credits & asset provenance

## Planet textures (`src/assets/textures/`)

The 3D globe uses real planetary maps instead of procedurally painted blobs. They were converted to WebP
(and, for `earth_roughness.webp`, derived from the ocean/land specular mask) from these public GitHub sources:

| File | Source |
| --- | --- |
| `earth_day`, `earth_normal`, `earth_roughness`, `earth_lights`, `earth_clouds`, `moon` | [`mrdoob/three.js` → `examples/textures/planets`](https://github.com/mrdoob/three.js/tree/dev/examples/textures/planets) |
| `mars`, `mars_bump` | [`jeromeetienne/threex.planets` → `images`](https://github.com/jeromeetienne/threex.planets/tree/master/images) |

The underlying imagery is derived from NASA data products (Blue Marble, LRO, Mars global maps) and
planetary map sets that circulate under attribution-style terms. **Before a commercial launch, confirm the
licence/attribution requirements of each original map and replace any file you cannot clear.** Drop-in
replacements only need to keep the same file names and aspect ratios (2:1 equirectangular).

## Fonts

IBM Plex Sans Arabic, JetBrains Mono, Manrope and Space Grotesk via Google Fonts (SIL Open Font License).
