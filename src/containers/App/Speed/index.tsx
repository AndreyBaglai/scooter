import React from 'react';

import Logo from 'components/Logo';

import { ReactComponent as TopEllipseIcon } from 'sources/icons/ellipses/speed-top.svg';
import { ReactComponent as BottomLineIcon } from 'sources/icons/lines/speed-bottom.svg';

import styles from './styles.module.scss';

const Speed: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      {/* <TopEllipseIcon className={styles.topEllipse} /> */}

      <div className="container">
        <div className={styles.content}>
          <Logo />
          <h2 className={styles.title}>Высокая скорость передвижения</h2>
          <p className={styles.text}>Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.</p>
        </div>
      </div>

      <BottomLineIcon className={styles.bottomLine} />
    </section>
  );
};

export default Speed;
