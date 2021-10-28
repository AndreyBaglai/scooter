import React from 'react';

import Peculiarities from './Peculiarities';

import imgSrc1 from 'sources/images/security-1.png';
import imgSrc2 from 'sources/images/security-2.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Security: React.FC = () => {
  return (
    <section className={cn('container', styles.security)}>
      <h2 className={styles.title}>Заботится о вашей безопасности</h2>

      <Peculiarities />

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg} />
        <img src={imgSrc2} alt="power2" className={styles.smallImg} />
      </div>
    </section>
  );
};

export default Security;
