---
sidebar_position: 3
title: "Editing Prims"
description: "How to create, delete, duplicate, reparent, and manage prims in usdtweak"
---

# Editing Prims

This guide covers the various operations you can perform on prims in usdtweak, primarily through the Layer Hierarchy panel.

## Creating prims

Right-click in the **Layer Hierarchy** to open the context menu. The menu offers options to create prims of various types:

- **Typed prims** -- Xform, Mesh, Scope, Material, Shader, Camera, and other USD schema types.
- **Blueprints** -- Pre-configured prim templates defined in your blueprint locations (configured in Preferences).
- **Generic prim** -- A prim without a specific type.

When creating a prim, it is added as a child of the prim you right-clicked on (or at the root if you right-clicked on the hierarchy background).

## Deleting prims

To delete a prim:

1. Select it in the Layer Hierarchy.
2. Right-click and choose **Delete** from the context menu.

:::warning
Deleting a prim in the Layer Hierarchy removes it from that specific layer. If the prim is defined in other layers (via composition), it will still exist in the composed stage from those other sources.
:::

## Duplicating prims

Right-click on a prim in the Layer Hierarchy and select the duplicate option. The duplicated prim is created as a sibling of the original with a modified name.

## Reparenting prims

You can reparent prims by **dragging and dropping** them in the Layer Hierarchy:

1. Click and hold a prim in the hierarchy.
2. Drag it over the target parent prim.
3. Release to reparent it under the new parent.

This moves the prim spec within the layer, updating all internal path references accordingly.

## Reordering prims

Prims within a parent can be reordered by dragging them up or down within the same parent in the Layer Hierarchy. This affects the authored order of prims, which can be important for some workflows.

## Copy and paste

usdtweak supports copying and pasting prims between layers:

1. Select a prim in the Layer Hierarchy.
2. Use **Ctrl+C** to copy (when available).
3. Navigate to the target location (which can be a different layer).
4. Use **Ctrl+V** to paste (when available).

This is useful for moving data between separate layer files.

## Adding blueprints

Blueprints are pre-configured prim templates that can be added to your scene. They are available in the right-click context menu of the Layer Hierarchy.

Blueprint locations can be configured through **Edit > Preferences**. Point usdtweak to directories containing your blueprint USD files, and they will appear in the creation menu.

## Undo and redo

All prim operations support undo and redo:

- **Ctrl+Z** -- Undo the last operation
- **Ctrl+R** -- Redo the last undone operation

You can also access undo and redo from the **Edit** menu.
