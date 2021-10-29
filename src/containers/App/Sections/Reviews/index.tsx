import React from 'react';

import Button from 'components/Button';
import Slider from 'components/Slider';

import styles from './styles.module.scss';
import cn from 'classnames';

const Reviews: React.FC = () => {
  return (
    <section className={cn('container', styles.reviews)}>
      <h2 className={styles.title}>Отзывы о Mi Scooter Pro 2</h2>

      <Slider />

      <div className={styles.controls}>
        <ul className={styles.horizontalCircles}>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
          <li className={styles.circle}></li>
        </ul>

        <Button>Оставить отзыв</Button>
      </div>
    </section>
  );
};

export default Reviews;
