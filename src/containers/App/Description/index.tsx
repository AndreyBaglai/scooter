import React from 'react';

import imgSrc1 from '../../../sources/images/power-1.png';
import imgSrc2 from '../../../sources/images/power-2.png';

import { ReactComponent as EllipseIcon } from 'sources/icons/ellipses/description.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const Description: React.FC = () => {
  return (
    <section className={cn('container', styles.wrapper)}>
      <EllipseIcon className={styles.ellipse} />
      <h2 className={styles.title}>Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км</h2>

      <div className={styles.row}>
        <div className={cn(styles.column, styles.active)}>
          <h4 className={styles.columnTitle}>Три режима скорости</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S»
            увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку
            активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Система восстановления энергии</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Во время торможения и движения по инерции система преобразовывает кинетическую энергию в
            электрическую, позволяя увеличить общий запас хода самоката.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Мощная батарея</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния
            до 45 км без подзарядки.
          </p>
        </div>
      </div>

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg}/>
        <img src={imgSrc2} alt="power2" className={styles.smallImg}/>
      </div>
    </section>
  );
};

export default Description;
