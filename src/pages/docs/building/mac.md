---
layout: layouts/docs.njk
permalink: /docs/mac/
eleventyNavigation:
  key: Mac
  parent: Building
  order: 2
---

## Compiling on MacOs

It compiles on MacOs Catalina. The viewport doesn't work as the required OpenGL version is not supported, but the layer editor does.

    git clone https://github.com/cpichard/usdtweak
    cd usdtweak
    git checkout develop
    mkdir build
    cd build
    cmake -Dpxr_DIR=/installs/usd-22.05 ..
    make
