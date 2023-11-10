---
sidebar_position: 1
---

# Layer vs Stage

To effectively use usdtweak, it's important to understand the difference between operating on a layer level and on a stage level.

A [layer](https://openusd.org/release/glossary.html#usdglossary-layer) is essentially a file containing data ([prims](https://openusd.org/release/glossary.html#usdglossary-prim)) and links ([composition arcs](https://openusd.org/release/glossary.html#usdglossary-compositionarcs)) to other files (layers) such as [sublayers](https://openusd.org/release/glossary.html#usdglossary-sublayers), [references](https://openusd.org/release/glossary.html#usdglossary-references), and [payloads](https://openusd.org/release/glossary.html#usdglossary-payload), or even links to other prims. A [stage](https://openusd.org/release/glossary.html#usdglossary-stage) represents a composed scene in memory, resolving various files (layers) and their data (prims) into a final structure based on the USD [composition system](https://openusd.org/release/glossary.html#composition), adhering to their [strength ordering](https://openusd.org/release/glossary.html#livrps-strength-ordering).

In usdtweak, these concepts are implemented as follows:

## Layer

Opening a file as a layer will not display anything in the viewport. However, you can directly access the data in the "Layer Hierarchy" window.

![Image showing Layer Hierarchy window](./img/Layer_hierarchy.jpg)

Similar to a text editor, [composition arcs](https://openusd.org/release/glossary.html#usdglossary-compositionarcs) appear as links. You can edit any prim in your layer using the "Layer Property Editor" window.

![Image showing Layer Property editor](./img/Layer_Property_Editor.jpg)

## Stage

When opened as a stage, the first thing you'll notice is that your objects will appear in the viewport (if present).

![Image showing objects in the viewport](./img/Viewport_stage.jpg)

Objects/prims can be selected in the viewport or through the "Stage Outliner" window.

![Image showing Stage Outliner window](./img/stage_outliner.jpg)

Selected prims can be edited in the "Stage Property Editor" window.

![Image showing Stage Property editor](./img/stage_property_editor.jpg)
