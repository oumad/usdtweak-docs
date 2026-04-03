---
sidebar_position: 3
title: "Building from Source"
description: "How to compile usdtweak from source on Windows, macOS, and Linux"
---

# Building from Source

If pre-built releases are not available for your platform or you want the latest development version, you can compile usdtweak from source.

## Requirements

- [CMake](https://cmake.org/) version 3.14 or newer
- A C++14 compiler (C++17 for USD 23.11+): MSVC 2019/2022, GCC, or Clang
- A build of [OpenUSD](https://github.com/PixarAnimationStudios/OpenUSD) version 20.11 or newer

CMake needs one required variable:

- **`pxr_DIR`** -- Path to the USD installation directory containing `pxrConfig.cmake`

GLFW is fetched and built automatically by CMake. If you already have a GLFW installation, you can point CMake to it with `glfw3_DIR` (see [Using your own GLFW](#compiling-with-your-own-glfw) below).

## Windows (automated build script)

The repository includes a PowerShell script that automates the entire build process, including downloading a compatible USD build:

```powershell
git clone https://github.com/cpichard/usdtweak
cd usdtweak
git checkout develop
.\windows-build.ps1
```

**Prerequisites for the script:**
- Git
- CMake 3.14+
- Visual Studio 2022 with the C++ desktop development workload
- Approximately 3 GB of free disk space

The script will download USD 25.08, configure, and build usdtweak automatically.

## Windows (manual build)

Open the **x64 Native Tools Command Prompt** for your Visual Studio version, then:

```batch
git clone https://github.com/cpichard/usdtweak
cd usdtweak
git checkout develop
mkdir build
cd build
cmake -G "Visual Studio 17 2022" -A x64 -Dpxr_DIR=C:\path\to\usd-25.08 ..
cmake --build . --config RelWithDebInfo
```

### Installing on Windows

After building, you can install usdtweak and its dependencies to a target directory:

```batch
cmake --install . --prefix <install_directory> --config RelWithDebInfo
```

### Creating a Windows installer

An experimental NSIS-based installer can be generated with CPack. Make sure [NSIS](https://nsis.sourceforge.io/Download) is installed and on your PATH, then run:

```batch
cmake --build . --target package --config RelWithDebInfo
```

## macOS (with pixi)

On macOS (Apple Silicon), the recommended approach uses [pixi](https://pixi.sh/) which handles USD and all dependencies via conda-forge:

```bash
git clone https://github.com/cpichard/usdtweak
cd usdtweak
git checkout develop
pixi run install
pixi run ut
```

The `pixi.toml` in the repository configures the build with:
- OpenUSD from conda-forge
- CMake and Ninja as build tools
- GLFW from conda-forge

This builds and launches usdtweak in a single step.

### macOS (manual build)

```bash
git clone https://github.com/cpichard/usdtweak
cd usdtweak
git checkout develop
mkdir build
cd build
cmake -Dpxr_DIR=/path/to/usd-install ..
make
```

:::info macOS viewport support
On macOS versions that do not support OpenGL 4.x, the 3D viewport will not be available. All layer editing panels continue to work normally.
:::

## Linux

```bash
git clone https://github.com/cpichard/usdtweak
cd usdtweak
git checkout develop
mkdir build
cd build
cmake -Dpxr_DIR=/path/to/usd-install ..
make
```

## Compiling with your own GLFW

By default, CMake downloads and builds GLFW 3.4 automatically. To use an existing GLFW installation instead, pass the `glfw3_DIR` variable pointing to the directory containing `glfw3Config.cmake`:

```bash
cmake -Dpxr_DIR=/path/to/usd -Dglfw3_DIR=/path/to/glfw3/lib/cmake/glfw3 ..
```

## Troubleshooting

- **pxrConfig.cmake not found** -- Double-check that `pxr_DIR` points to the root of your USD installation (the directory that contains `pxrConfig.cmake`).
- **Compiler version mismatch** -- USD and usdtweak must be built with compatible compiler versions and C++ standards. If USD was built with C++17, use the same standard for usdtweak.
- **Missing OpenGL** -- Ensure OpenGL development headers are installed. On Linux, install `libgl1-mesa-dev` or your distribution's equivalent package.
