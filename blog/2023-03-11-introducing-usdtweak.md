---
slug: introducing-usdtweak
title: Introducing usdtweak
authors:
  - name: Cyril Pichard
    title: Maintainer of usdtweak
    url: https://github.com/cpichard
    image_url: https://avatars.githubusercontent.com/u/300243
  - name: Mohamed Oumoumad
    title: Contributor
    url: https://github.com/oumad
    image_url: https://avatars.githubusercontent.com/u/17836943
tags: [usdtweak, introduction, motivation]
---

# Introducing usdtweak

## What is usdtweak ?

Usdtweak is a USD editor. Think of it like Usdview but with full editing capabilities. Usdtweak is also optimized for switching between multiple layers and stages efficiently.

## What usdtweak is not ?

Usdtweak is not a content creation app, while it allows you to add/remove data and manipulate prims,attributes of stages or layers, it was not designed to generate content for your scene. Instead it was made to easily and efficiently edit content created from different DCC apps.

## Motivation

Usdtweak was originally created at a time where there was no other option than opening the usd files in ascii format or using python bindings to edit them, which was not very efficient for quickly inspecting and fixing scenes. Today many existing DCC apps are starting to support USD editing (Houdini, maya..), there are also other new DCC apps that are fully based on USD (ex : Omniverse, Wizart DCC Platform…), and we also have other useful open source tools for general usd editing ([Dreamwork’s usd manager](https://github.com/dreamworksanimation/usdmanager), [usdNodeGraph](https://github.com/1xinghuan/usdNodeGraph…). Each one of these solutions either have limitations to how much you can easily and efficiently edit USD files, or they introduce their specific non standard variables, which limits interoperability and forces you to stick with one DCC. Instead usdtweak aims to provide the maximum freedom and confidence to artists in working with USD throughout their pipeline with any or even multiple DCCs at the same time, more on this on “Why use Usdtweak”.

## Why use Usdtweak ?

### Lightweight

Usdtweak is blazingly fast to startup, as fast as opening a simple text editor, this is because usdtweak is written in C++ and doesn’t rely on bloated packages like Qt. For the same reason it is also very fast at opening usd files as a layer or even as a stage.

### Full USD standard

Usdtweak focuses on USD native capabilities for all the features it provides, this preserves maximum interoperability and ensures the most durable workflow throughout the pipeline, it also encourages best practices when working with USD.

### Multi layer/stage editing

Usdtweak is optimized for dealing with many layers and stages at a time while keeping the most minimal memory footprint.

## Features

- Layer prims and attributes authoring.
- Layer composition arcs authoring.
- Stage editing with edit target.
- Stage rendering ( comes with storm but any render delegate can be added).
- Attributes keyframing.
- Animation playblast.
- Text editor
- And a lot more…

## Use cases

- When your favorite DCC app doesn't allow you to do a specific USD manipulation like editing a specific attribute, dealing with instances, or authoring variants, usdtweak is useful for quickly opening the layer or stage, making the edit you want, saving, and reloading the layer in your DCC app.
- When there's an issue causing a USD file to not work correctly in your DCC app, quickly open it in usdtweak and start debugging by checking the layer properties, prims, attributes, and try changing/removing values.
- When you need to quickly prepare a starting USD file with sublayers and properties to use later in a specific DCC where it is usually hard or slow to do that (ex Unreal Engine).
- When you want to bring models exported from your favorite DCC apps and make them into assets that benefit from USD's rich composition system and render purposes.
- ...
