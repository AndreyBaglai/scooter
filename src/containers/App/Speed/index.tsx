import React from 'react';

import Logo from 'components/Logo';

import lineSrc from 'sources/images/lines/speed.png';

import styles from './styles.module.scss';

const Speed: React.FC = () => {
  return (
    <section className={styles.speed}>
      <div className="container">

        <div className={styles.content}>
          <Logo />
          <h2 className={styles.title}>Высокая скорость передвижения</h2>
          <p className={styles.text}>
            Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.
          </p>
        </div>

        <img src={lineSrc} className={styles.line} alt="line" />
      </div>
    </section>
  );
};

export default Speed;
