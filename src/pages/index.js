import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Image from "@theme/IdealImage";

import styles from "./index.module.css";

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

function IconBolt() {
  return (
    <svg
      className={styles.featureIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconDna() {
  return (
    <svg
      className={styles.featureIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="M17 6l-2.5-2.5" />
      <path d="M14 8l-1.5-1.5" />
      <path d="M7 18l2.5 2.5" />
      <path d="M3.5 14.5l.5.5" />
      <path d="M20 9l.5.5" />
      <path d="M6.5 12.5l1 1" />
      <path d="M16.5 10.5l1 1" />
      <path d="M10 16l1.5 1.5" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg
      className={styles.featureIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      className={styles.capabilityIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    Icon: IconBolt,
    title: "Lightning Fast",
    description:
      "Written in C++ with a GPU-powered UI, usdtweak eliminates bloated Python layers for instant startup and a responsive experience.",
  },
  {
    Icon: IconDna,
    title: "Direct USD Access",
    description:
      "Edit USD features directly with no translations or abstractions — the most interoperable and long-lasting pipeline workflow.",
  },
  {
    Icon: IconLayers,
    title: "Multi-Layer Editing",
    description:
      "Load multiple layers and stages into memory simultaneously, switching seamlessly between individual layer editing or direct stage authoring.",
  },
];

const capabilities = [
  "Composition Arcs",
  "Material Binding",
  "Built-in Text Editor",
  "USD Validation",
  "Hydra/Storm Viewport",
  "Multi-Viewport",
  "Render Settings & AOVs",
  "Shader Registry Inspector",
  "Playblast",
  "Property Editing",
  "Variant Editing",
  "String Search",
  "Undo/Redo",
  "Blueprint System",
  "USDZ Export",
  "Custom Launchers",
];


/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>usdtweak</h1>
        <p className={styles.heroSubtitle}>Ultra lightweight USD editor</p>
        <p className={styles.heroDescription}>
          A fast, native C++ editor for OpenUSD. Inspect and author layers,
          stages, and compositions with no Python overhead.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={styles.secondaryButton}
            href="https://github.com/cpichard/usdtweak"
          >
            <IconGitHub /> GitHub
          </Link>
          <Link
            className={styles.downloadButton}
            href="https://github.com/cpichard/usdtweak/releases"
          >
            Download
          </Link>
        </div>
      </div>

      <div className={styles.heroScreenshot}>
        <Image img={require("@site/static/img/screens/screen1.jpg")} />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */

function FeaturesSection() {
  return (
    <section className={styles.sectionDark}>
      <h2 className={styles.sectionTitle}>Built for speed and precision</h2>
      <p className={styles.sectionSubtitle}>
        Everything you need to work with Universal Scene Description, without
        the bloat.
      </p>
      <div className={styles.featuresGrid}>
        {features.map(({ Icon, title, description }) => (
          <div key={title} className={styles.featureCard}>
            <Icon />
            <h3 className={styles.featureCardTitle}>{title}</h3>
            <p className={styles.featureCardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Capabilities                                                       */
/* ------------------------------------------------------------------ */

function CapabilitiesSection() {
  return (
    <section className={styles.sectionAlt}>
      <h2 className={styles.sectionTitle}>Capabilities</h2>
      <p className={styles.sectionSubtitle}>
        A growing feature set covering real-world USD workflows.
      </p>
      <div className={styles.capabilitiesGrid}>
        {capabilities.map((cap) => (
          <div key={cap} className={styles.capabilityItem}>
            <IconCheck />
            <span className={styles.capabilityLabel}>{cap}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Ultra lightweight USD editor — fast, native C++ editor for OpenUSD"
    >
      <HeroSection />
      <main>
        <FeaturesSection />
        <CapabilitiesSection />
      </main>
    </Layout>
  );
}
