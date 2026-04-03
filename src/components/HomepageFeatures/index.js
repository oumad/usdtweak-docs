import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Lightning Fast",
    Svg: require("@site/static/img/icons/speed-monitor.svg").default,
    description: (
      <>
        Written in C++ with a GPU-powered UI, usdtweak eliminates bloated
        Python layers for instant startup and a responsive experience.
      </>
    ),
  },
  {
    title: "Direct USD Access",
    Svg: require("@site/static/img/icons/dna.svg").default,
    description: (
      <>
        Edit USD features directly with no translations or abstractions — the
        most interoperable and long-lasting pipeline workflow.
      </>
    ),
  },
  {
    title: "Multi-Layer Editing",
    Svg: require("@site/static/img/icons/multi-layer.svg").default,
    description: (
      <>
        Load multiple layers and stages into memory simultaneously, switching
        seamlessly between individual layer editing or direct stage authoring.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
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
