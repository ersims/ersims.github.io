import { VoidFunctionComponent } from 'react';
import styles from './App.module.scss';

// Exports
export const App: VoidFunctionComponent = () => (
  <>
    <header className={styles.appHeader}>
      <h1>ersims.dev</h1>
      <small className={styles.subtitle}>Nothing to see here 🙂</small>
      <a className={styles.link} href="/pub.key">
        gpg public key
      </a>
      <a className={styles.link} href="https://github.com/ersims">
        github.com
      </a>
      <footer className={styles.footer}>
        {(import.meta.env.VITE_APP_BUILD_ID || 'dev').substring(0, 7)}
      </footer>
    </header>
  </>
);
