---
sidebar_position: 1
title: "UI Overview"
description: "An overview of the usdtweak user interface layout and its panels"
---

# UI Overview

usdtweak uses a dockable panel system powered by ImGui. Every panel can be moved, resized, docked alongside others as tabs, or floated as a standalone window. This lets you build a layout that fits your workflow.

## Main menu bar

The menu bar runs along the top of the application and provides access to all operations:

| Menu | Contents |
|------|----------|
| **File** | New, Open, Open Recent, Save, Save As, Export Stage, Quit |
| **Edit** | Undo, Redo, Clear Undo/Redo, Clear History, Search, Preferences |
| **Tools** | Storm Playblast |
| **Windows** | Toggle visibility of every panel |
| **Help** | About dialog |

To the right of the menus, the menu bar displays:

- **Stage selector** -- A button showing the current stage name. Click it to switch between open stages.
- **Edit target selector** -- A pen icon followed by the current edit target layer name. Click the pen to change which layer receives your edits.

## Panels at a glance

All panels are accessible via the **Windows** menu. Here is every panel usdtweak provides:

| Panel | Purpose |
|-------|---------|
| **Viewport** (1--4) | 3D Hydra-rendered view of the current stage. Up to four viewports. |
| **Content Browser** | Lists all open stages and layers for quick switching. |
| **Stage Outliner** | Hierarchical tree of composed prims in the current stage. |
| **Stage Property Editor** | Edit properties, metadata, material bindings, and variants on the selected stage prim. |
| **Layer Hierarchy** | Tree of prim specs in the current layer (uncomposed data). |
| **Layer Property Editor** | Edit SdfPrimSpec properties and metadata on the selected layer prim. |
| **Stage Layer Editor** | Manage the sublayer stack: add, remove, reorder, and mute/unmute sublayers. |
| **Layer Text Editor** | View and edit the current layer as USDA ASCII text. |
| **Attribute Editor** | Inspect and edit time-sampled attribute values in a spreadsheet view. |
| **Connection Editor** | Graph-based view and editing of attribute connections. |
| **Timeline** | Animation playback controls and frame scrubbing. |
| **Validation** | Run USD validation checks on the current stage (requires USD validation API). |
| **Hydra Browser** | Inspect the Hydra scene index internals. |
| **Shader Registry Inspector** | Browse registered shader definitions. |
| **Debug Window** | Internal state information for development and debugging. |
| **Launcher Bar** | Custom shortcuts to launch external tools. |
| **Status Bar** | Frame rate and performance information. |

## Layout philosophy

The interface is split conceptually into two domains:

1. **Stage-level panels** (Stage Outliner, Stage Property Editor, Viewport) operate on the composed stage where all layers, references, and payloads are resolved together. Changes made here are written to the current **edit target** layer.

2. **Layer-level panels** (Layer Hierarchy, Layer Property Editor, Text Editor) operate on a single layer's raw data. They show exactly what is authored in that file, with no composition.

Understanding this distinction is key to using usdtweak effectively. See the [Layer vs. Stage](../Concepts/LayerVsStage) concept page for details.

## Customizing the layout

- **Dock panels** by dragging a panel's title bar onto another panel or onto the edges of the window.
- **Create tabs** by dropping a panel onto the center of another panel.
- **Float panels** by dragging them away from any docking area.
- **Close panels** using the X button on their tab, or uncheck them in **Windows** menu.
- Your layout is saved automatically between sessions.
