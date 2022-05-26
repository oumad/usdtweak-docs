---
layout: layouts/docs.njk
permalink: /docs/linux/
eleventyNavigation:
  key: Linux
  parent: Building
  order: 2
---

## Compiling on linux

On linux it should compile with:

    git clone https://github.com/cpichard/usdtweak
    cd usdtweak
    git checkout develop
    mkdir build
    cd build
    cmake -Dpxr_DIR=/installs/usd-22.05 ..
    make
