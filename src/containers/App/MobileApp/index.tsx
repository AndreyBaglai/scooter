import React from 'react';

import imgPath from 'sources/images/phone.png';
import { ReactComponent as AppleIcon } from 'sources/icons/apple.svg';
import { ReactComponent as GoogleIcon } from 'sources/icons/google.svg';
import { ReactComponent as EllipseIcon } from 'sources/icons/ellipses/mobile-app.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

const MobileApp: React.FC = () => {
  return (
    <section className={cn('container', styles.wrapper)}>
      <div className={styles.description}>
        <h4 className={styles.title}>Мобильное приложение Mi Home</h4>
        <p className={styles.text}>
          Подключите самокат к мобильному приложению Mi Home и используйте его для блокировки и
          разблокировки самоката, а так же просмотра основных данных: пробег, скорость, уровень
          заряда аккумулятора.
        </p>
        <ul className={styles.stores}>
          <li className={styles.store}>
            <AppleIcon />
          </li>
          <li className={styles.store}>
            <GoogleIcon />
          </li>
        </ul>
      </div>

      <img src={imgPath} alt="phone" className={styles.phone} />

      <EllipseIcon className={styles.ellipse} />
    </section>
  );
};

export default MobileApp;
