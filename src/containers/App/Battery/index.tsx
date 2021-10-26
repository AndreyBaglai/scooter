import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'stores';

import ToggleTheme from 'components/ToggleTheme';

import darkBikeSrc from '../../../sources/images/dark-header-bike.png';
import lightBikeSrc from '../../../sources/images/light-header-bike.png';
import ellipseSrc from '../../../sources/images/ellipses/header.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Battery: React.FC = observer(() => {
  const { themeStore } = useStore();
  const { theme } = themeStore;

  return (
    <section className={cn('container', styles.battery)}>
      <h1 className={styles.title}>Стильный электросамокат с мощным аккумулятором</h1>
      <span className={styles.text}>
        Улучшенная производительность для дальних путешествий. Работает так же просто, как и
        выглядит.
      </span>
      <ToggleTheme />

      <img src={theme === 'dark' ? darkBikeSrc : lightBikeSrc} alt="bike" className={styles.bike} />

      <img src={ellipseSrc} className={styles.ellipse} alt="ellipse" />
    </section>
  );
});

export default Battery;
