---
sidebar_position: 2
title: "Supported Formats"
description: "USD file formats supported by usdtweak"
---

# Supported Formats

usdtweak supports all standard USD file formats.

## File formats

| Extension | Format | Description |
|-----------|--------|-------------|
| `.usd` | Default | Can be either ASCII or binary (crate). USD determines the actual format from the file's contents. When creating new files with this extension, the format depends on the USD build configuration. |
| `.usda` | ASCII | Human-readable text format. Easy to inspect and diff in version control. Larger file sizes and slower to load than binary. |
| `.usdc` | Binary (Crate) | USD's binary format. Compact and fast to load. Not human-readable. Recommended for production assets. |
| `.usdz` | ZIP Package | A zip-compressed archive containing a USD file and its dependencies (textures, etc.). Used for distribution and interchange, especially in AR workflows (Apple ARKit). Read-only in most USD implementations. |

## Opening formats

usdtweak can open all four formats directly:

- **File > Open** -- Opens any supported format as a stage or layer.
- **Drag and drop** -- Drop any supported file into the window.
- **Command line** -- Pass any supported file as an argument.

## Saving and exporting

| Operation | Supported formats |
|-----------|-------------------|
| **Save layer** (Ctrl+S) | Saves in the layer's original format |
| **Save layer as** (Ctrl+F) | `.usd`, `.usda`, `.usdc` |
| **Export USDZ** | `.usdz` (compressed package) |
| **Export ARKit USDZ** | `.usdz` (ARKit-compatible package) |
| **Export flattened** | `.usd`, `.usda`, `.usdc` |

## Format considerations

- **Version control** -- Use `.usda` for files that need to be human-readable and diffable. Use `.usdc` for large files where performance matters.
- **Interchange** -- Use `.usdz` for sharing complete assets with all dependencies bundled.
- **Composition** -- All formats support full composition. A `.usda` root layer can reference `.usdc` assets and vice versa.
