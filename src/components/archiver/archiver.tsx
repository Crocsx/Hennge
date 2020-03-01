import React from 'react';
import Search from './search/search';
import List from './list/list';
import * as styles from './archiver.module.css'

function Archiver() {
  return (
    <div className={styles["Archiver"]}>
        <header className={styles["Archiver-header"]}>
          <Search></Search>
        </header>
        <section className={styles["Archiver-section"]}>
          <List></List>
        </section>
    </div>
  );
}

export default Archiver;
