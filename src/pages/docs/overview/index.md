---
layout: layouts/docs.njk
permalink: /docs/
eleventyNavigation:
  key: Overview
  parent: Docs
  order: 1
---

# usdtweak Docs

## Introduction

usdtweak is a free and open source editor for Pixar's [USD](https://graphics.pixar.com/usd/release/index.html#) format. The project is still in early stage, but usdtweak can already be used for small and simple tasks like cleaning assets, creating and editing layers or inspecting and fixing existing usd stages.

This project is written in C++ and relies on [ImGUI](https://github.com/ocornut/imgui) for the UI and [GLFW](https://github.com/glfw/glfw) for the windowing system.

## Sneak peek

![screenshot1](https://media.giphy.com/media/9Nb4JmmqEXzO05DpvL/giphy.gif)

## Status

There is no roadmap at the moment, as it is my side project and the development is slow and unpredictable, I can only work on it a few hours during the week-end. The original idea behind this project was to improve usdview by adding edition capabilities, for artists, technical directors and users who don't necessarily know the USD ascii syntax or are not familiar with python. So my current goal driving the developments is to provide at least the same functionalities as usdview and some ability to edit the stages and layers.

As of today usdtweak allows

- to edit multiple stages and layers at the same time, copying and pasting prims between layers,
- to edit stages properties selecting the edit target
- to edit layer hierarchy: adding, deleting, reparenting, and renaming prims
- to edit layer stack: adding, deleting new sublayers
- to create and delete compositions like variants, references and payloads, inherits, ...
- to change property values in layers or stages
- to add and delete keys
- a minimal viewport interaction: translating, rotating, scaling objects.
- text editing (for small files)
- and more ...

Drop me an email if you are interested in beta testing on windows or if you can't compile it.

## Contact

If you want to know more, or have any issues, questions, drop me an email: cpichard.github@gmail.com
