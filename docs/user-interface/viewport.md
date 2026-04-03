---
sidebar_position: 2
title: "Viewport"
description: "Detailed guide to the 3D viewport: cameras, manipulators, display settings, and rendering options"
---

# Viewport

The viewport is the 3D rendering window that displays your composed stage using the Hydra rendering framework. usdtweak supports up to **four independent viewports**, each with its own camera and display settings.

## Camera controls

### Orbit mode (default)

| Action | Input |
|--------|-------|
| **Orbit** | Middle-click + drag |
| **Pan** | Shift + middle-click + drag |
| **Zoom** | Scroll wheel |

### Fly mode

Fly mode provides first-person camera navigation using keyboard and mouse:

| Action | Input |
|--------|-------|
| **Move forward** | W |
| **Move backward** | S |
| **Strafe left** | A |
| **Strafe right** | D |

The fly speed can be adjusted in the viewport settings popup (the monitor icon in the toolbar) under **Camera fly speed**.

### Framing

- **Frame selection** -- Automatically moves the camera to frame the currently selected prim.
- **Frame root prim** -- Resets the camera to frame the entire scene.

## Manipulators

The manipulator toolbox appears on the left side of the viewport when any viewport is open. It provides four modes:

| Manipulator | Description |
|-------------|-------------|
| **Select** (arrow icon) | Click to select prims in the viewport. No transform gizmo shown. |
| **Translate** (arrows icon) | Move prims along axes or planes using the position gizmo. |
| **Rotate** (circular arrows icon) | Rotate prims around axes using the rotation gizmo. |
| **Scale** (compress icon) | Scale prims along axes. Hold **Shift** for uniform scaling. |

Click the corresponding button in the toolbox, or use the toolbar buttons within the viewport itself, to switch modes.

## Pick modes

The pick mode controls how clicking in the viewport resolves to a prim selection:

| Mode | Behavior |
|------|----------|
| **Prim (P)** | Selects the exact prim whose geometry was clicked. |
| **Model (M)** | Walks up the hierarchy to the nearest prim with `kind = model` (or a model-derived kind). |
| **Assembly (A)** | Walks up the hierarchy to the nearest prim with `kind = assembly`. |

The pick mode button is displayed in the viewport toolbar and in the manipulator toolbox.

## Viewport toolbar

The toolbar runs along the top of the viewport and provides quick access to rendering and display options (left to right):

### Hydra enable/disable

The film icon toggles Hydra rendering on or off for the current stage. Disabling Hydra is useful when you only need the layer editing panels and want to avoid the rendering overhead.

### Renderer selection

Shows the current Hydra render delegate (typically **Storm**). Click to switch between available renderers if multiple are installed.

### Pick mode

Described above. Controls how viewport clicks resolve to prim selections.

### Renderer settings

The gear icon opens a popup with detailed renderer controls:

- **Renderer** -- Select the render delegate
- **Color correction** -- sRGB or disabled
- **AOV selection** -- Choose which render output to display (color, depth, etc.)
- **Renderer commands** -- Renderer-specific actions
- **Renderer settings** -- Renderer-specific parameters

### Viewport settings

The monitor icon opens display settings:

- **Background color** -- Set the viewport background
- **Draw mode** -- Choose how geometry is rendered:
  - Points
  - Wireframe
  - Wireframe on surface
  - Shaded flat
  - Shaded smooth (default)
  - Geometry only
  - Geometry flat
  - Geometry smooth
- **Complexity** -- Adjust subdivision/tessellation LOD (1.0 to 1.4)
- **Show purpose** -- Toggle visibility of geometry by USD purpose: guides, proxy, render
- **Highlight selection** -- Enable or disable selection highlighting
- **Enable lighting** -- Toggle lighting calculations
- **Enable scene materials** -- Toggle material rendering
- **Enable scene lights** -- Toggle scene-authored lights
- **Enable USD draw modes** -- Respect draw mode opinions on prims
- **Enable camera light** -- Toggle the camera-attached headlight
- **Show grid** -- Toggle the ground grid
- **Show gizmos** -- Toggle transform gizmos
- **Camera fly speed** -- Adjust the speed of fly-mode navigation
- **Show menu bar** -- Toggle the viewport's menu bar (an alternative layout for accessing these settings)

### Camera light toggle

The flame icon toggles the camera-attached headlight on or off.

### Scene materials toggle

The sparkle icon toggles scene material rendering. When disabled, geometry is shown with a default grey material, which can improve viewport performance.

### Camera selection

Shows the current camera name. Click to open the camera list:

**Built-in cameras:**
- Perspective
- Top
- Bottom
- Front
- Back
- Left
- Right

**Stage cameras:** Any `UsdGeomCamera` prims found in your stage are also listed and can be selected.

The camera popup also includes a camera editor for adjusting parameters of the selected camera.

## Multiple viewports

usdtweak supports up to four simultaneous viewports (Viewport1 through Viewport4). Enable additional viewports from the **Windows** menu. Each viewport has its own camera, renderer settings, and display options, so you can view your scene from multiple angles or with different rendering configurations at the same time.

## Viewport menu bar

As an alternative to the toolbar buttons, you can enable a traditional menu bar at the top of the viewport via the viewport settings popup (**Show menu bar** checkbox). The menu bar provides the same options organized under **Renderer**, **Viewport**, and **Cameras** menus.
