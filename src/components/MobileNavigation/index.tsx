import React from 'react';

import { ReactComponent as CloseIcon } from 'sources/icons/close.svg';

import ellipseSrc from 'sources/images/ellipses/questions.png';
import lineSrc from 'sources/images/lines/description.png';

import styles from './styles.module.scss';

interface IProps {
  onCloseMobileMenu: (event: React.MouseEvent) => void;
}

const MobileNavigation: React.FC<IProps> = ({ onCloseMobileMenu }) => {
  return (
    <nav id="mobileMenu" className={styles.mobileNav}>
      <CloseIcon id="closeIcon" className={styles.closeIcon} onClick={onCloseMobileMenu} />

      <ul className={styles.nav}>
        <img src={ellipseSrc} className={styles.ellipse} alt="ellipse" />
      
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

        <img src={lineSrc} className={styles.bottomLine} alt="line" />
      </ul>
    </nav>
  )
}

export default MobileNavigation;
