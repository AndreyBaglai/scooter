import React from 'react';

import Row from './Row';

import imgSrc1 from 'sources/images/description-1.png';
import imgSrc2 from 'sources/images/description-2.png';

import lineSrc from 'sources/images/lines/description.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Description: React.FC = () => {
  return (
    <section className={cn('container', styles.description)}>
      <h2 className={styles.title}>Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км</h2>

      <Row />

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg}/>
        <img src={imgSrc2} alt="power2" className={styles.smallImg}/>
      </div>

      <img src={lineSrc} className={styles.bottomLine} alt="line" />
    </section>
  );
};

export default Description;
