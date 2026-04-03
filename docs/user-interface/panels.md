---
sidebar_position: 3
title: "Panels"
description: "Detailed description of every panel and window in usdtweak"
---

# Panels

This page describes each panel available in usdtweak. All panels can be shown or hidden from the **Windows** menu.

## Content Browser

The Content Browser lists all currently open stages and layers. Click on any entry to make it the active document. This is the primary way to switch between multiple open files.

When you open a file (as either a stage or a layer), it automatically appears in the Content Browser.

## Stage Outliner

The Stage Outliner displays a hierarchical tree of all prims in the currently composed stage. This reflects the fully resolved composition -- all sublayers, references, payloads, and other arcs are flattened into a single hierarchy.

**Key features:**
- Click a prim to select it. The selection syncs with the viewport and the Stage Property Editor.
- The outliner has a menu bar with filtering and display options.
- Prim names reflect their composed state, including opinions from all contributing layers.

## Stage Property Editor

When a prim is selected in the Stage Outliner or viewport, the Stage Property Editor shows its properties and metadata from the composed stage perspective.

**Capabilities:**
- **Property values** -- View and edit attribute values at the current time code. For time-sampled attributes, the value shown corresponds to the frame set in the Timeline.
- **Material binding** -- A dedicated section shows material bindings per purpose (full, preview). Click the cog icon to see a list of all materials in the stage and assign one. See [Materials](../Guides/AssignMaterial) for details.
- **Schema application** -- Apply USD schemas to the selected prim.
- **Variant selection** -- If the prim or its ancestors have variant sets, you can select variants here to switch between authored options.
- **Metadata** -- View and edit prim metadata such as kind, purpose, documentation, and custom data.

:::info Edit target
Changes made through the Stage Property Editor are written to the current **edit target** layer. Check the pen icon in the menu bar to see which layer is receiving your edits.
:::

## Layer Hierarchy

The Layer Hierarchy shows the prim specs authored in the current layer, without any composition. This is the raw data as stored in the file.

**Key features:**
- Right-click to create, delete, rename, duplicate, or reparent prims.
- Drag and drop prims to reparent them within the layer.
- Composition arcs (references, payloads, inherits, etc.) appear as entries but are not resolved -- they are shown as authored data.
- Prims can be reordered within their parent.

This panel is essential for working with individual layer files and understanding what data lives where in a multi-layer setup.

## Layer Property Editor

The Layer Property Editor displays properties and metadata for the selected prim spec in the current layer. It operates at the Sdf (scene description format) level, showing only what is directly authored in the layer.

**Capabilities:**
- Edit property values, including default values and time samples.
- View and modify prim metadata (specifier, type name, kind, etc.).
- Add or remove properties from the prim spec.
- View composition arc definitions authored on this prim spec.

## Stage Layer Editor

The Stage Layer Editor shows the sublayer stack of the current stage's root layer. It lets you manage the composition of your scene at the sublayer level.

**Operations:**
- **Add sublayer** -- Add an existing layer file as a sublayer.
- **Remove sublayer** -- Remove a sublayer from the stack.
- **Reorder sublayers** -- Change the strength ordering by dragging sublayers up or down.
- **Mute/unmute** -- Temporarily disable a sublayer without removing it from the stack. Muted layers are ignored during composition.

## Layer Text Editor

The Layer Text Editor provides a USDA ASCII view of the current layer. You can view the entire layer contents as text, and make direct edits to the USD data.

**When to use it:**
- Debugging composition issues by inspecting the raw ASCII data
- Making quick edits that are easier to express as text than through the UI
- Copying and pasting USD snippets

:::warning
The text editor works best with small to medium-sized layers. Very large layers may be slow to display.
:::

Enable this panel from **Windows > Layer text editor**.

## Attribute Editor

The Attribute Editor provides a detailed view of attribute values, particularly useful for time-sampled data. It displays values in a spreadsheet-like format, making it easy to inspect and edit animation data across multiple time samples.

## Connection Editor

The Connection Editor provides a graph-based interface for viewing and editing attribute connections. This is useful for shader networks and other connection-based workflows in USD.

:::info
The Connection Editor may need to be enabled at compile time (`ENABLE_CONNECTION_EDITOR`).
:::

## Validation Window

The Validation Window runs USD validation checks on the current stage and reports any errors or warnings found. This is useful for ensuring your USD data conforms to expected schemas and conventions.

:::info
This feature requires USD to be built with the validation API (available in recent USD versions). If USD was built without validation support, this panel will not be available.
:::

## Hydra Browser

The Hydra Browser allows you to inspect the Hydra scene index, which is the intermediate representation used by Hydra to render your stage. This is primarily a debugging tool for understanding how your USD data maps to the rendering pipeline.

## Shader Registry Inspector

The Shader Registry Inspector lets you browse shader definitions registered with the USD shader registry. This is useful for understanding what shader parameters are available and how shaders are defined.

:::info
The Shader Registry Inspector requires USD version 25.11 or newer.
:::

## Timeline

The Timeline panel provides animation playback controls:

- **Play/Stop** -- Start and stop animation playback.
- **Frame scrubbing** -- Drag the playhead to navigate to any frame.
- **Frame range** -- The timeline reflects the stage's authored start and end time codes.

The current time code from the Timeline is used by the viewport and all property editors to display time-sampled values.

## Launcher Bar

The Launcher Bar provides customizable shortcuts to external tools. You can configure launcher entries through the **Preferences** dialog (Edit > Preferences), specifying a name and command line for each tool.

This is useful for integrating usdtweak into a larger pipeline -- for example, adding a button to open the current file in `usdview`, run a validation script, or launch a custom processing tool.

## Debug Window

The Debug Window shows internal state information about the editor. It is primarily intended for development and troubleshooting purposes.

## Status Bar

The Status Bar appears at the bottom of the application and displays the current frame rate (frames per second) and frame time in milliseconds. Enable it from the **Windows** menu.
