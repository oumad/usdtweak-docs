---
sidebar_position: 7
title: "Exporting"
description: "How to export USD stages as USDZ packages or flattened files"
---

# Exporting

usdtweak can export the current stage in several formats through the **File > Export Stage** menu. Exporting creates a new file from the composed stage data.

## Export options

### Compressed package (USDZ)

Exports the stage as a USDZ file, which is a zip-compressed USD package. USDZ bundles the stage and its dependencies (textures, referenced layers, etc.) into a single portable file.

1. Go to **File > Export Stage > Compressed package (usdz)**.
2. Choose a destination path and filename.
3. Click OK to export.

The exported file will have the `.usdz` extension.

### ARKit package (USDZ)

Exports the stage as a USDZ file formatted for Apple ARKit compatibility. This uses the ARKit-specific packaging conventions.

1. Go to **File > Export Stage > Arkit package (usdz)**.
2. Choose a destination path and filename.
3. Click OK to export.

:::info
ARKit USDZ files have specific requirements around materials, geometry, and animation. Ensure your content follows [Apple's USDZ content guidelines](https://developer.apple.com/augmented-reality/quick-look/) for best results.
:::

### Flattened stage (USD)

Exports the fully composed stage as a single flattened USD file. All composition arcs are resolved and the result is written as a single layer containing the final composed data.

1. Go to **File > Export Stage > Flattened stage (usd)**.
2. Choose a destination path and filename. You can use `.usda`, `.usdc`, or `.usd` extensions.
3. Click OK to export.

:::tip When to flatten
Flattening is useful for:
- Creating a self-contained snapshot of a composed scene
- Simplifying complex compositions for external tools that don't support USD composition
- Debugging to see the final resolved state of all opinions
:::

## Prerequisites

Export operations require a stage to be open. The Export Stage menu items are only available when a composed stage is active (not when only a raw layer is open).
