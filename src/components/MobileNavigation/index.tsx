import React from 'react';

import Link from './Link';

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
          <Link>О продукте</Link>
        </li>
        <li>
          <Link>Внешний вид</Link>
        </li>
        <li>
          <Link>Безопасность</Link>
        </li>
        <li>
          <Link>Отзывы</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>

        <img src={lineSrc} className={styles.bottomLine} alt="line" />
      </ul>
    </nav>
  )
}

export default MobileNavigation;
