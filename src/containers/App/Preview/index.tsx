import React from 'react';

import Button from 'components/Button';
import ToggleTheme from 'components/ToggleTheme';

import { ReactComponent as BikeIcon } from 'sources/icons/footer-bike.svg';
import imgPath from '../../../sources/images/footer-bike.png';

import styles from './styles.module.scss';

const Preview: React.FC = () => {
  return (
    <section className={styles.preview}>
      <div className={styles.description}>
        <div>
          <h2 className={styles.title}>
            Mi Electric Scooter Pro 2 <span className={styles.price}>54 990 ₽</span>
          </h2>
          <ToggleTheme />
        </div>

        <div className={styles.buy}>
          <Button isOrange={true}>Купить</Button>
        </div>
      </div>

      <div className={styles.supplyWrapper}>
        <h4 className={styles.subTitle}>Комплект поставки</h4>
        <ul className={styles.supplyList}>
          <li>Адаптер питания</li>
          <li>Шестигранный ключ</li>
          <li>Удлинитель для насоса </li>
          <li>Винты x 5 шт.</li>
          <li>Запасная шина</li>
          <li>Руководство пользователя </li>
          <li>Буклет с информацией</li>
        </ul>
      </div>

      <img src={imgPath} alt="bike" className={styles.bike} />
      {/* <BikeIcon className={styles.bike} /> */}
    </section>
  );
};

export default Preview;
