import React from 'react';

import Logo from 'components/Logo';

import lineSrc from 'sources/images/lines/brand.png';

import styles from './styles.module.scss';

const Brand: React.FC = () => {
  return (
    <section className={styles.brand}>
      <div className="container">
        <div className={styles.content}>
          <Logo />
          <div className={styles.wrapper}>
            <h2 className={styles.title}>О бренде Xiaomi</h2>
            <p className={styles.text}>
              Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом -
              «Инновации для всех»
            </p>
            <p className={styles.text}>
              Мы верим, что высококачественные продукты и передовые технологии должны быть доступны
              каждому.
            </p>
          </div>
        </div>
        <ul className={styles.verticalCircles}>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
        </ul>

        <ul className={styles.horizontalCircles}>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
        </ul>
      </div>

      <img src={lineSrc} className={styles.line} alt="line" />
    </section>
  );
};

export default Brand;
