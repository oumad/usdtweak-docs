---
sidebar_position: 1
---

# Building

## Requirements

The project is almost self contained and only needs:

- [cmake](https://cmake.org/) installed (version > 3.14)
- a C++14 compiler installed: MSVC 19 or 17, g++ or clang++.
- a build of [Universal Scene Description](https://github.com/PixarAnimationStudios/USD/releases/tag/v22.05) version >= 20.11. (I am not sure the USD libraries provided with maya, houdini or omniverse would work)

If you managed to build USD, compiling usdtweak should be easy, cmake needs only 1 required variables:

- **pxr_DIR** pointing to the USD installation directory containing the file pxrConfig.cmake

## Compiling on linux

On linux it should compile with:

    git clone https://github.com/cpichard/usdtweak
    cd usdtweak
    git checkout develop
    mkdir build
    cd build
    cmake -Dpxr_DIR=/installs/usd-22.05 ..
    make

## Compiling on MacOs

It compiles on MacOs Catalina. The viewport doesn't work as the required OpenGL version is not supported, but the layer editor does.

    git clone https://github.com/cpichard/usdtweak
    cd usdtweak
    git checkout develop
    mkdir build
    cd build
    cmake -Dpxr_DIR=/installs/usd-22.05 ..
    make

## Compiling on Windows

It should compile successfully on Windows 10 with MSVC 19 or 17 using the RelWithDbInfo config. Make sure you open/use the x64 Native Tools commands prompt before typing the following commands:

    git clone https://github.com/cpichard/usdtweak
    cd usdtweak
    git checkout develop
    mkdir build
    cd build
    cmake  -G "Visual Studio 16 2019" -A x64 -Dpxr_DIR=C:\installs\usd-22.05 ..
    cmake --build . --config RelWithDebInfo

## Installing on Windows

You can install usdtweak with its dependencies on windows, it copies the required files in a directory with the following command:

    cmake --install . --prefix <where_you_want_to_install_usdtweak> --config RelWithDebInfo

Note that it is not really tested on anything else than my machine/setup so it might not work for you, feel free to get in touch if you have any issue.

## Creating a Windows installer

There is an experimental packaging system using cpack/NSIS on windows which creates an installer. You have to make sure the nsis application is available on you system, you can download it from here [NSIS](https://nsis.sourceforge.io/Download). The command to create the installer is then:

    cmake --build . --target package --config RelWithDebInfo

## Compiling with your version of glfw

usdtweak is using [GLFW](https://www.glfw.org/) for its windowing system. cmake should normally download, compile and install glfw without any user intervention. However, if you already have a compiled version you want to use instead, and you'll need to disable the automatic build of glfw, by passing an additional cmake variable:

- **glfw3_DIR** pointing to your GLFW installation directory and containing the file glfw3Config.cmake

A cmake command will then look like:

    cmake  -G "Visual Studio 16 2019" -A x64 -Dpxr_DIR=C:\installs\usd-21.11 -Dglfw3_DIR=C:\installs\glfw3-3.3.6\lib\cmake\glfw3 ..
