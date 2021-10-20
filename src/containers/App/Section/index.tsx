import React from 'react';

import ToggleTheme from 'components/ToggleTheme';

import { ReactComponent as BikeIcon } from 'sources/icons/header-bike.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const Section: React.FC = () => {
  return (
    <section className={cn('container', styles.section)}>
      <h1 className={styles.title}>Стильный электросамокат с мощным аккумулятором</h1>
      <span className={styles.text}>Улучшенная производительность для дальних путешествий. Работает так же просто, как и выглядит.</span>
      <ToggleTheme />
      {/* <div className={styles.bike}><BikeIcon /></div> */}
    </section>
  );
};

export default Section;
