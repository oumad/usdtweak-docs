---
sidebar_position: 2
title: "Edit Target"
description: "Understanding the edit target concept: controlling which layer receives your edits"
---

# Edit Target

The edit target is a fundamental concept when working with composed USD stages. It determines **which layer receives the edits** you make through the stage-level interface.

## Why it matters

A USD stage is built from multiple layers stacked together through sublayering. When you modify a property on a composed prim (for example, changing a transform value in the Stage Property Editor), USD needs to know which layer file should store that change.

The edit target answers this question. It is always set to one specific layer in the sublayer stack. Any changes made through the stage-level panels (Stage Outliner, Stage Property Editor, viewport manipulators) are authored into the edit target layer.

This enables **non-destructive workflows**: different departments or pipeline stages can author their opinions in separate layers, and each person works with their layer set as the edit target.

## The pen icon

Throughout the usdtweak interface, the edit target is represented by a **pen icon**. You will see it in the main menu bar, to the right of the stage selector. Next to the pen icon, the name of the current edit target layer is displayed.

### Changing the edit target

Click the **pen icon** in the menu bar to open a dropdown showing all layers in the current stage's sublayer stack. Select a different layer to change the edit target.

The edit target can only be set to a layer that is part of the current stage's composition. Typically, this means the root layer or one of its sublayers.

## Practical example

Consider a stage with this sublayer structure:

```
stage.usd (root layer)
  ├── layout.usd (sublayer)
  └── shading.usd (sublayer)
```

- If the edit target is set to `layout.usd`, moving an object in the viewport writes the transform override into `layout.usd`.
- If the edit target is set to `shading.usd`, changing a material binding writes into `shading.usd`.
- If the edit target is set to the root `stage.usd`, all edits go into that file.

This separation is preserved when saving -- each layer file only contains the edits authored while it was the edit target.

## Default edit target

When you open a stage, the edit target defaults to the **root layer** (the file you opened). You can change it at any time.

## Interaction with layer-level editing

The edit target only affects **stage-level** operations (Stage Property Editor, viewport manipulators, Stage Outliner). When you edit through **layer-level** panels (Layer Hierarchy, Layer Property Editor, Text Editor), you are directly modifying the current layer regardless of the edit target setting.

## Tips

:::tip
- Always check the edit target before making edits to ensure changes go to the intended layer.
- Use the edit target to separate concerns: layout changes in one layer, material overrides in another.
- The pen icon in the menu bar is always visible, making it easy to verify the current edit target at a glance.
:::
