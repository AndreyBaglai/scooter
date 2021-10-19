import React from 'react';

import styles from './styles.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.nav}> 
        <li>
          <a className={styles.link} href="/#">О продукте</a>
        </li>
        <li>
          <a className={styles.link} href="/#">Внешний вид</a>
        </li>
        <li>
          <a className={styles.link} href="/#">Безопасность</a>
        </li>
        <li>
          <a className={styles.link} href="/#">Отзывы</a>
        </li>
        <li>
          <a className={styles.link} href="/#">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
