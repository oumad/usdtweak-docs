import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Lightning fast",
    Svg: require("@site/static/img/icons/speed-monitor.svg").default,
    description: (
      <>
        usdtweak's C++ code and GPU-powered UI eliminate bloated Python
        packages, ensuring the quickest startup time and a responsive UI.
      </>
    ),
  },
  {
    title: "Unmediated USD-based",
    Svg: require("@site/static/img/icons/dna.svg").default,
    description: (
      <>
        With usdtweak's simple interface, you can directly edit USD features,
        without any translations or abstractions, for the most interoperable and
        long-lasting workflow.
      </>
    ),
  },
  {
    title: "Multi-layer and stage",
    Svg: require("@site/static/img/icons/multi-layer.svg").default,
    description: (
      <>
        usdtweak efficiently loads multiple layers and stages into memory,
        allowing you to seamlessly switch between them for individual layer
        editing or direct stage authoring.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
