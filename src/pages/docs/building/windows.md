---
layout: layouts/docs.njk
permalink: /docs/windows/
eleventyNavigation:
  key: Windows
  parent: Building
  order: 1
---

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
