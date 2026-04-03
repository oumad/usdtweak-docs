---
sidebar_position: 4
title: "Composition"
description: "Working with USD composition arcs in usdtweak: references, payloads, variants, inherits, and more"
---

# Composition

USD's composition system is one of its most powerful features. It allows you to build complex scenes from reusable components by layering opinions from multiple sources. usdtweak provides UI for creating and managing all standard composition arcs.

## Composition arcs overview

USD defines several types of composition arcs, listed here in LIVRPS strength order (strongest to weakest):

| Arc | Purpose |
|-----|---------|
| **Local opinions** | Direct opinions authored on the prim in the current layer. |
| **Inherits** | Share opinions across multiple prims. Changes to the source propagate to all inheriting prims. |
| **Variants** | Author multiple options for a prim and switch between them. |
| **References** | Compose another prim (from the same or a different file) into this location. |
| **Payloads** | Like references, but can be selectively loaded/unloaded for performance. |
| **Specializes** | Similar to inherits, but weaker: the specializing prim's local opinions win over the source. |

**Sublayering** is a separate mechanism that stacks multiple layer files, with earlier sublayers being stronger.

## Adding composition arcs

In the **Layer Hierarchy**, right-click on a prim to access composition operations in the context menu. The available options include:

### References

Add a reference to compose data from another prim (in the same or a different layer) into the selected prim:

1. Right-click the prim in the Layer Hierarchy.
2. Choose the option to add a reference.
3. Specify the target layer file path and (optionally) the target prim path within that layer.

If no target prim path is specified, the default prim of the referenced layer is used.

### Payloads

Payloads work similarly to references but are designed for heavy data that should be deferrable:

1. Right-click the prim in the Layer Hierarchy.
2. Choose the option to add a payload.
3. Specify the target layer file path and target prim path.

When opening a stage, you can choose whether to load payloads immediately or defer them for faster open times.

### Inherits

Inherits allow a prim to inherit opinions from another prim, typically a class prim:

1. Right-click the prim in the Layer Hierarchy.
2. Choose the option to add an inherit.
3. Specify the path to the source prim.

### Specializes

Specializes is similar to inherits but with different strength ordering:

1. Right-click the prim in the Layer Hierarchy.
2. Choose the option to add a specialize.
3. Specify the path to the source prim.

### Variants

Variants allow you to author multiple alternatives for a prim:

1. Right-click the prim to add a variant set.
2. Within the variant set, add individual variants.
3. Author different opinions in each variant.

In the **Stage Property Editor**, you can switch between variants using the variant selector dropdown.

## Managing sublayers

The **Stage Layer Editor** panel manages the sublayer stack:

- **Add sublayer** -- Add an existing USD file as a sublayer.
- **Remove sublayer** -- Remove a sublayer from the stack.
- **Reorder** -- Drag sublayers to change their position. Higher layers are stronger and override lower ones.
- **Mute/unmute** -- Temporarily disable a sublayer without removing it.

## Viewing composition

The Layer Property Editor shows composition arcs authored on the selected prim spec. You can see which references, payloads, inherits, specializes, and variant sets are defined.

When working at the stage level, the Stage Property Editor shows the resolved composition result, and the Composition Editor (if available) provides a detailed view of how all arcs combine.

## Composition tips

:::tip
- Use **references** for bringing external assets into your scene.
- Use **payloads** for heavy assets that should be loadable on demand.
- Use **sublayers** to separate concerns (e.g., layout vs. animation vs. shading).
- Use **variants** to provide switchable alternatives (e.g., LOD levels, color options).
- Use **inherits** to share common properties across many prims via class hierarchies.
:::
