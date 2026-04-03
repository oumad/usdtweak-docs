---
sidebar_position: 9
title: "Tools"
description: "Using usdtweak's built-in tools: playblast, launcher bar, and validation"
---

# Tools

usdtweak includes several utility tools accessible from the menu bar and dedicated panels.

## Storm Playblast

The playblast tool renders an image sequence of your stage using the Hydra Storm renderer. Access it from **Tools > Storm playblast**.

### Configuration

The playblast dialog provides the following options:

- **Stage camera** -- Select which camera to render from. Only stage cameras (UsdGeomCamera prims defined in your stage) are available.
- **Output directory** -- The directory where rendered frames will be saved.
- **Filename prefix** -- The base filename for the image sequence.
- **Sequence mode** -- Render a range of frames or a single frame.
- **Start / End** -- The frame range to render (when in sequence mode).
- **Width** -- The output image width in pixels. Height is determined by the camera's aspect ratio.

### Usage

1. Open a stage with at least one camera prim.
2. Go to **Tools > Storm playblast**.
3. Configure the output settings.
4. Click OK to start rendering.

The playblast renders frames using `UsdAppUtilsFrameRecorder`, which creates a headless Storm render for each frame.

:::info Limitations
The current playblast implementation has some limitations:
- Only stage cameras can be used (not the viewport's internal perspective camera).
- Renderer options (like material loading) cannot be customized from the dialog.
- There is no progress bar during rendering.
:::

## Launcher Bar

The Launcher Bar lets you create custom shortcuts to external tools. Enable it from **Windows > Launcher bar**.

### Adding launchers

1. Go to **Edit > Preferences**.
2. In the launcher section, add a new entry with:
   - **Name** -- The label that appears on the button in the Launcher Bar.
   - **Command line** -- The command to execute when the button is clicked.
3. Close preferences. The new launcher appears in the Launcher Bar.

### Removing launchers

Open **Edit > Preferences** and remove the launcher entry you no longer need.

### Use cases

Common uses for the Launcher Bar include:

- Opening the current file in `usdview` for comparison
- Running validation scripts on the current scene
- Launching custom pipeline tools
- Opening a terminal in the current working directory
- Running USD utilities like `usdcat` or `usdchecker`

## Validation Window

The Validation Window runs USD validation checks on the current stage. Enable it from **Windows > Validation**.

The validator checks your stage for:
- Schema conformance issues
- Invalid property types or values
- Missing required attributes
- Other USD structural problems

:::info Availability
The Validation Window requires USD to be built with the validation API (`HAVE_USDVALIDATION`). If your USD build does not include validation support, this window will not appear in the Windows menu.
:::

## Search

Access the search tool from **Edit > Search**. It provides text-based search functionality across the current stage and layers, helping you find prims, properties, and values by name.
