import React from 'react';

import imgSrc1 from '../../../sources/images/description-1.png';
import imgSrc2 from '../../../sources/images/description-2.png';
import imgSrc3 from '../../../sources/images/description-3.png';
import imgSrc4 from '../../../sources/images/description-4.png';

import { ReactComponent as EllipseIcon } from 'sources/icons/ellipses/description.svg';
import { ReactComponent as BottomLineIcon } from 'sources/icons/lines/description.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const Description: React.FC = () => {
  return (
    <section className={cn('container', styles.description)}>
      {/* <EllipseIcon className={styles.ellipse} /> */}
      <h2 className={styles.title}>Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км</h2>

      <div className={styles.row}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Три режима скорости</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S»
            увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку
            активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.
          </p>
          <img src={imgSrc1} alt="speed" className={styles.columnImg}/>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Система восстановления энергии</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Во время торможения и движения по инерции система преобразовывает кинетическую энергию в
            электрическую, позволяя увеличить общий запас хода самоката.
          </p>
          <img src={imgSrc4} alt="relax" className={styles.columnImg}/>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Мощная батарея</h4>
          <div className={styles.line}></div>
          <p className={styles.text}>
            Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния
            до 45 км без подзарядки.
          </p>
          <img src={imgSrc3} alt="battery" className={styles.columnImg}/>
        </div>
      </div>

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg}/>
        <img src={imgSrc2} alt="power2" className={styles.smallImg}/>
      </div>

      {/* <BottomLineIcon className={styles.bottomLine} /> */}
    </section>
  );
};

export default Description;
