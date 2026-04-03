---
sidebar_position: 8
title: "Animation"
description: "Working with animation playback, the timeline, and time-sampled attributes in usdtweak"
---

# Animation

usdtweak supports USD's time-sampled data through the Timeline panel and time-aware property editors.

## Timeline panel

Enable the Timeline from **Windows > Timeline**. The Timeline provides:

- **Playhead** -- A draggable indicator showing the current frame. Drag it to scrub through the animation.
- **Play/Stop** -- Start and stop animation playback. During playback, the frame advances in real time based on the stage's `timeCodesPerSecond` metadata.
- **Frame range** -- The timeline range is determined by the stage's `startTimeCode` and `endTimeCode` metadata. If these are not set, the timeline defaults to a single frame.

The current time code set in the Timeline is shared across all viewports and property editors.

## Playback behavior

When playback is active:

- The viewport updates each frame to show animated geometry, transforms, and materials.
- Property editors display the interpolated values at the current time.
- When playback reaches the end time code, it loops back to the start.

Stopping playback snaps the current time to the nearest whole frame.

## Editing time-sampled attributes

Time-sampled attributes (attributes with values that change over time) can be viewed and edited in several places:

### Stage Property Editor

The Stage Property Editor shows property values at the current time code. For time-sampled attributes, the displayed value corresponds to the current frame in the Timeline.

### Attribute Editor

The **Attribute Editor** panel (Windows > Attribute editor) provides a detailed view of time samples, displaying values across multiple frames in a spreadsheet-like format. This is useful for:

- Inspecting animation curves and keyframe values
- Adding or removing time samples
- Editing individual keyframe values

### Layer Property Editor

The Layer Property Editor shows the raw time samples authored in the current layer, including the full list of time-value pairs.

## Animation metadata

Key stage-level metadata that controls animation:

| Metadata | Description |
|----------|-------------|
| `startTimeCode` | The first frame of the stage's animation range. |
| `endTimeCode` | The last frame of the stage's animation range. |
| `timeCodesPerSecond` | The playback speed in time codes per second (e.g., 24 for film). |
| `framesPerSecond` | The intended display rate in frames per second. |

These can be set through the stage's root layer metadata.
