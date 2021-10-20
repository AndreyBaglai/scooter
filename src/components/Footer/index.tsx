import React from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

const Footer: React.FC = () => {
  return (
    <footer className={cn('container', styles.footer)}>
      <div className={styles.left}>
        <p>© 2010 - 2021 Xiaomi.</p>
        <p>Все права защищены.</p>
      </div>
      <div className={styles.right}>
        <p>8 800 775 66 15</p>
        <p>Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</p>
      </div>
    </footer>
  );
};

export default Footer;
