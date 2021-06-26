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
    </header>
  </>
);
