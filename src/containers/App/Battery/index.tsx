import React from 'react';

import ToggleTheme from 'components/ToggleTheme';

import { ReactComponent as BikeIcon } from 'sources/icons/header-bike.svg';
import { ReactComponent as TopEllipseIcon } from 'sources/icons/ellipses/header.svg';
import { ReactComponent as BottomEllipseIcon } from 'sources/icons/ellipses/description.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const Battery: React.FC = () => {
  return (
    <section className={cn('container', styles.section)}>
      <h1 className={styles.title}>Стильный электросамокат с мощным аккумулятором</h1>
      <span className={styles.text}>
        Улучшенная производительность для дальних путешествий. Работает так же просто, как и
        выглядит.
      </span>
      <ToggleTheme />

      <TopEllipseIcon className={styles.topEllipse} />
      <BikeIcon className={styles.bike} />
      <BottomEllipseIcon className={styles.bottomEllipse} />
    </section>
  );
};

export default Battery;
