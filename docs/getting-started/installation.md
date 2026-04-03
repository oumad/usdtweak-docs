---
sidebar_position: 1
title: "Installation"
description: "How to download and install usdtweak on Windows, macOS, and Linux"
---

# Installation

usdtweak can be installed from pre-built releases or compiled from source.

## Pre-built releases

The easiest way to get started is to download a pre-built release from the [GitHub Releases](https://github.com/cpichard/usdtweak/releases) page.

### Windows

1. Download the latest `.zip` bundle from the releases page.
2. Extract the archive to any directory.
3. Run `usdtweak.exe` from the extracted folder.

:::tip Portable install
The Windows ZIP bundle from CI is fully portable -- no installer required. Just extract and run.
:::

An NSIS installer may also be available for releases that include one.

### macOS

Pre-built binaries may be available on the releases page for macOS. Download and extract, then run the `usdtweak.app` bundle.

:::info macOS viewport limitation
On older macOS versions (prior to those supporting OpenGL 4.x), the 3D viewport may not be available since the required OpenGL version is not supported. The layer editor and all non-viewport panels will still work.
:::

### Linux

Download the Linux archive from the releases page, extract, and run the `usdtweak` binary. Ensure that a compatible USD installation is available on your system and that `LD_LIBRARY_PATH` includes the USD library directory if needed.

## Building from source

If you need the latest features on the `develop` branch, or if no pre-built release is available for your platform, you can build usdtweak from source. See the [Building from Source](./building) guide for full instructions.

## Verifying the installation

After installing, launch usdtweak. You should see the main application window with a menu bar. Try opening a USD file via **File > Open** to confirm everything is working. If the viewport renders your geometry, the Hydra/Storm integration is functioning correctly.
