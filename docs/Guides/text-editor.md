---
sidebar_position: 6
title: "Text Editor"
description: "Using the layer text editor to view and edit USD data as ASCII text"
---

# Text Editor

usdtweak includes a built-in text editor that displays the current layer's contents in USDA (USD ASCII) format. This is useful for quick inspections, debugging, and making edits that are easier to express as text.

## Enabling the text editor

The text editor is not shown by default. To open it:

1. Go to **Windows > Layer text editor** in the menu bar.
2. The text editor panel will appear, showing the contents of the current layer.

## Viewing layer data

When a layer is selected (either directly or as part of an open stage), the text editor displays its full USDA representation. This includes:

- Prim definitions and their specifiers (def, over, class)
- Property values and defaults
- Metadata (kind, purpose, documentation, custom data)
- Composition arcs (references, payloads, sublayers, inherits, specializes, variants)
- Time-sampled values

This provides a complete view of what is authored in the layer, using the standard USDA syntax.

## Editing data

You can directly edit the text in the editor. Changes made in the text editor modify the underlying layer data.

:::warning Performance
The text editor is best suited for small to medium-sized layers. Very large layers may cause performance issues when rendering the full text content.
:::

## When to use the text editor

The text editor is particularly useful for:

- **Debugging** -- Quickly inspect the raw authored data to understand composition issues or unexpected property values.
- **Quick fixes** -- Making small corrections (typos in paths, adjusting a single value) can be faster in text than navigating through the UI panels.
- **Learning USD** -- Seeing the USDA representation of changes you make through the UI helps build understanding of the USD format.
- **Copying snippets** -- Select and copy portions of the USDA text for use in scripts, documentation, or other files.
