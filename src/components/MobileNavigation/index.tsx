import React from 'react';

import { ReactComponent as CloseIcon } from 'sources/icons/close.svg';

import styles from './styles.module.scss';

interface IProps {
  onCloseMobileMenu: () => void;
}

const MobileNavigation: React.FC<IProps> = ({ onCloseMobileMenu }) => {
  return (
    <nav id="mobileMenu" className={styles.mobileNav}>
      <CloseIcon className={styles.closeIcon} onClick={onCloseMobileMenu} />

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
  )
}

export default MobileNavigation;
