import React from 'react';

import ToggleTheme from 'components/ToggleTheme';

import { ReactComponent as BikeIcon } from 'sources/icons/header-bike.svg';
import { ReactComponent as EllipseIcon } from 'sources/icons/ellipses/header.svg';
import imgPath from '../../../sources/images/header-bike.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Battery: React.FC = () => {
  return (
    <section className={cn('container', styles.battery)}>
      <h1 className={styles.title}>Стильный электросамокат с мощным аккумулятором</h1>
      <span className={styles.text}>
        Улучшенная производительность для дальних путешествий. Работает так же просто, как и
        выглядит.
      </span>
      <ToggleTheme />

      <img src={imgPath} alt="bike" className={styles.bike} />

      {/* <EllipseIcon className={styles.ellipse} /> */}
      {/* <BikeIcon className={styles.bike} /> */}
    </section>
  );
};

export default Battery;
