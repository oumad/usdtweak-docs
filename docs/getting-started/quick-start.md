---
sidebar_position: 2
title: "Quick Start"
description: "A quick tour of usdtweak: opening files, navigating the UI, and making your first edit"
---

# Quick Start

This guide walks you through launching usdtweak, opening a USD file, and getting familiar with the main interface elements.

## Launching usdtweak

Run the `usdtweak` executable. On first launch you will see an empty workspace with the main menu bar at the top.

You can also open a file directly from the command line:

```bash
usdtweak path/to/your/file.usd
```

## Opening a USD file

There are three ways to open a file:

1. **File menu** -- Go to **File > Open**, browse to your USD file, and click OK. You can choose to open the file as a **stage** (composed, with viewport rendering) or as a **layer** (raw data, no composition).
2. **Drag and drop** -- Drag a `.usd`, `.usda`, `.usdc`, or `.usdz` file from your system file browser into the usdtweak window. The file opens as a layer by default.
3. **Command line** -- Pass the file path as an argument when launching: `usdtweak scene.usd`.

:::tip Open as stage vs. layer
Opening as a **stage** composes all sublayers, references, and payloads together and enables the 3D viewport. Opening as a **layer** shows only the raw data in that single file, which is useful for debugging or when the composed stage would be too heavy. See [Layer vs. Stage](../Concepts/LayerVsStage) to learn more.
:::

## Understanding the layout

The usdtweak interface is built around dockable panels that you can rearrange to suit your workflow. The default layout includes:

### Main menu bar

The top menu bar provides access to all operations:

- **File** -- Create, open, save, export, and quit.
- **Edit** -- Undo, redo, search, and preferences.
- **Tools** -- Playblast and other utilities.
- **Windows** -- Toggle visibility of each panel.
- **Help** -- About dialog.

To the right of the menus you will find the **stage selector** (switch between open stages) and the **edit target selector** (the pen icon, which controls which layer receives your edits).

### Viewport

The 3D viewport renders your stage using Hydra Storm. It appears when you open a file as a stage.

- **Orbit**: Middle-click and drag
- **Pan**: Shift + middle-click and drag
- **Zoom**: Scroll wheel
- **Select**: Left-click on an object

A toolbar along the top of the viewport provides access to renderer settings, camera selection, lighting toggles, and display options. A manipulator toolbox on the left side lets you switch between Select, Translate, Rotate, and Scale modes.

### Stage Outliner

A tree view of all prims in the composed stage. Click a prim to select it. The selection syncs with the viewport and the property editor.

### Stage Property Editor

Displays the properties and metadata of the selected prim in the composed stage. You can modify property values, bind materials, apply schemas, and select variants here.

### Layer Hierarchy

Shows the prim specs in the current layer (the raw, uncomposed data). Right-click to create, delete, or rearrange prims.

### Layer Property Editor

Edits properties on the selected prim spec in the current layer, operating at the Sdf level rather than the composed Usd level.

### Content Browser

Lists all currently open stages and layers. Click an entry to switch to it.

## Making your first edit

1. Open a USD file as a stage (**File > Open**, check "Open as stage").
2. In the **Stage Outliner**, click on a prim to select it.
3. In the **Stage Property Editor**, find a property (for example, a transform attribute) and change its value.
4. Press **Ctrl+S** to save the current layer.

That is it -- you have made your first edit in usdtweak. Explore the [Guides](../category/guides) for more detailed workflows.
