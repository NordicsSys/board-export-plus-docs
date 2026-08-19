import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/power-up-guide"
          >
            Open the user guide
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://www.youtube.com/watch?v=IQOwqYVIWLk"
          >
            Watch the video
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Board Export+ Documentation"
      description="Short visual guide for Board Export+ — exports, presets, schedules, history, and billing."
    >
      <HomepageHeader />
      <main>
        <section className={styles.homeSection}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Watch first</h2>
                <p>
                  Start with the Board Export+ video guide, then follow the
                  screenshot walkthrough for each screen.
                </p>
              </div>
              <div className="col col--4">
                <h2>Export in minutes</h2>
                <p>
                  Set filename, lists, fields, and format — then preview and
                  export. Save presets for one-click reuse.
                </p>
              </div>
              <div className="col col--4">
                <h2>Automate delivery</h2>
                <p>
                  Schedule recurring exports, verify email or webhooks, and
                  track history and billing from Settings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.homeSection}>
          <div className="container">
            <h2>New: the complete Trello export guide</h2>
            <p>
              Compare Excel, CSV, PDF, and JSON, then follow a screenshot-based
              walkthrough to create the right export for your workflow.
            </p>
            <Link
              className="button button--primary button--lg"
              to="/blog/export-trello-board-excel-csv-pdf-json"
            >
              Read the 2026 export guide
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
