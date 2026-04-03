---
sidebar_position: 3
title: "Command Line Options"
description: "Command line usage for usdtweak"
---

# Command Line Options

usdtweak accepts file paths as command line arguments to open files on startup.

## Usage

```bash
usdtweak [file1.usd] [file2.usd] ...
```

## Arguments

| Argument | Description |
|----------|-------------|
| `file.usd` | Path to a USD file to open on startup. The file is opened as a stage. Multiple files can be specified. |

## Examples

### Open a single file

```bash
usdtweak kitchen_set.usd
```

### Open multiple files

```bash
usdtweak layout.usd shading.usd
```

This opens both files, and you can switch between them using the Content Browser or the stage selector in the menu bar.

### Open a file with a relative path

```bash
usdtweak ./assets/prop.usda
```

### Open a USDZ package

```bash
usdtweak model.usdz
```

## Launching without arguments

Running `usdtweak` with no arguments opens the application with an empty workspace. You can then open files through the **File > Open** menu or by dragging and dropping files into the window.

## Environment

usdtweak respects the standard USD environment variables for plugin loading and asset resolution:

| Variable | Purpose |
|----------|---------|
| `PXR_PLUGINPATH_NAME` | Additional plugin search paths for USD plugins and Hydra render delegates |
| `PXR_AR_DEFAULT_SEARCH_PATH` | Default search paths for USD asset resolution |

Additional plugin paths can also be configured through the Preferences dialog in usdtweak (Edit > Preferences).
