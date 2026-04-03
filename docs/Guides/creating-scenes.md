---
sidebar_position: 2
title: "Creating Scenes"
description: "How to create new USD scenes, add prims, set metadata, and build sublayer compositions"
---

# Creating Scenes

This guide covers creating new USD files in usdtweak and building up scene content from scratch.

## Creating a new file

Go to **File > New** to open the create file dialog. You will see a file browser where you can choose a location and filename for your new file.

The dialog provides an **Open as stage** checkbox:
- **Checked** -- Creates the file and opens it as a stage, enabling the viewport and composed editing.
- **Unchecked** -- Creates the file and opens it as a raw layer.

usdtweak will create the file in USD format. The file extension determines the format: `.usda` for ASCII, `.usdc` for binary (crate), or `.usd` for the default format.

## Adding prims

Once you have a file open, you can add prims through the **Layer Hierarchy** panel:

1. Right-click in the Layer Hierarchy to open the context menu.
2. Select the type of prim you want to create (e.g., Xform, Mesh, Scope, etc.).
3. The new prim appears in the hierarchy and can be renamed.

When working at the stage level, you can also add prims through the Stage Outliner context menu. These edits are written to the current edit target layer.

### Adding root prims

Root prims sit directly under the pseudo-root (`/`). To add one, right-click on the root of the hierarchy and choose the prim type.

### Adding child prims

To add a child prim, right-click on an existing prim in the hierarchy and choose the prim type from the context menu. The new prim will be created as a child of the selected prim.

## Setting metadata

Select a prim and use the **Layer Property Editor** or **Stage Property Editor** to set metadata:

- **Default prim** -- The default prim is the prim used when the layer is referenced without specifying a target path. Set it on the layer's root level metadata.
- **Kind** -- Set the `kind` metadata to classify prims (e.g., `component`, `assembly`, `group`). This affects how pick modes work in the viewport.
- **Purpose** -- Set the geometry purpose (`default`, `render`, `proxy`, `guide`) to control visibility in different rendering contexts.
- **Documentation** -- Add a `documentation` string to describe the prim's purpose.

## Adding sublayers

To build a composition with multiple layers:

1. Open or create your main layer/stage.
2. Open the **Stage Layer Editor** panel (Windows > Stage layer editor).
3. Use the controls to add existing layer files as sublayers.
4. Reorder sublayers to control their strength ordering (stronger layers override weaker ones).

See [Composition](./composition) for more details on building multi-layer scenes.

## Composition workflow

A typical composition workflow in usdtweak:

1. **Create a root stage** file that serves as the entry point.
2. **Add sublayers** for different departments or aspects of the scene (layout, animation, shading).
3. **Add references** to bring in asset definitions from external files.
4. **Set the edit target** to control which layer receives new edits.
5. **Author overrides** in the appropriate layers to build up the final scene non-destructively.
