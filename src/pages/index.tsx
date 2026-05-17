import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import type {ReactNode} from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/power-up-guide">
            Read the Power-Up guide
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/deployment">
            Publish safely
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Board Export+ Documentation"
      description="User-facing documentation for the Board Export+ Trello Power-Up.">
      <HomepageHeader />
      <main>
        <section className={styles.homeSection}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Export Workflows</h2>
                <p>Learn how Start, Fields, People, Labels, Presets, Schedule, History, and Settings work together.</p>
              </div>
              <div className="col col--4">
                <h2>Delivery Setup</h2>
                <p>Understand real email delivery, webhook verification, scheduled export payloads, and troubleshooting.</p>
              </div>
              <div className="col col--4">
                <h2>Safe Publishing</h2>
                <p>Publish documentation without exposing private product code, environment files, or credentials.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
