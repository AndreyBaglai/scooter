import React from 'react';

import imgPath1 from '../../../sources/images/modern-design-1.png';
import imgPath2 from '../../../sources/images/modern-design-2.png';

import { ReactComponent as TopEllipseIcon } from 'sources/icons/ellipses/design.svg';
import { ReactComponent as BottomEllipseIcon } from 'sources/icons/ellipses/design.svg';
import { ReactComponent as LineIcon } from 'sources/icons/lines/design.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const Design: React.FC = () => {
  return (
    <section className={cn('container', styles.wrapper)}>
      {/* <TopEllipseIcon className={styles.topEllipse} /> */}

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

       {/* <BottomEllipseIcon className={styles.bottomEllipse} />
       <LineIcon className={styles.line}/> */}
    </section>
  );
};

export default Design;
