import React from 'react';

import imgPath1 from '../../../sources/images/modern-design-1.png';
import imgPath2 from '../../../sources/images/modern-design-2.png';

import topEllipseSrc from '../../../sources/images/ellipses/top-design.png';
import bottomEllipseSrc from '../../../sources/images/ellipses/bottom-design.png';
import lineSrc from '../../../sources/images/lines/design.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Design: React.FC = () => {
  return (
    <section className={cn('container', styles.design)}>
      <img src={topEllipseSrc} className={styles.topEllipse} alt="top ellipse" />

      <h2 className={styles.title}>Лаконичный современный дизайн, в котором нет ничего лишнего</h2>
      <div className={styles.imgWrapper}>
        <div className={styles.item}>
          <img src={imgPath1} alt="design" className={styles.img}/>
          <div className={styles.description}>
            <h4 className={styles.text}>Минималистичный дизайн </h4>
            <p className={styles.subtext}>
              Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство
              пользователя выходит на первое место. Одного прикосновения достаточно, чтобы запустить
              самокат.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={imgPath2} alt="design" className={styles.img}/>
          <div className={styles.description}>
            <h4 className={styles.text}>Удобная панель управления</h4>
            <p className={styles.subtext}>
              Удобно расположенные элементы управления. Отображение 8 типов данных в реальном
              времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая
              информация.
            </p>
          </div>
        </div>
      </div>

       <img src={bottomEllipseSrc} className={styles.bottomEllipse} alt="bottom ellipse" />
       <img src={lineSrc} className={styles.line} alt="line" />
    </section>
  );
};

export default Design;
