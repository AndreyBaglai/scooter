import React from 'react';

import imgSrc1 from '../../../sources/images/security-1.png';
import imgSrc2 from '../../../sources/images/security-2.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Security: React.FC = () => {
  return (
    <section className={cn('container', styles.wrapper)}>
      <h2 className={styles.title}>Заботится о вашей безопасности</h2>

      <div className={styles.row}>
        <div className={styles.column}>
          <h4>Яркие ходовые огни</h4>
          <div className={styles.line}></div>
          <p>
            Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
            других участников движения.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Двойная тормозная система</h4>
          <div className={styles.line}></div>
          <p>
            При нажатии наручку тормоза системы переднего и заднего колеса активируются
            последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Яркая задняя фара</h4>
          <div className={styles.line}></div>
          <p>
            При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку
            тормоза она начинает мигать, предупреждая других участников движения.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Отражатели спереди, сбоку и сзади</h4>
          <div className={styles.line}></div>
          <p>
          Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток безопаснее.
          </p>
        </div>
      </div>

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg} />
        <img src={imgSrc2} alt="power2" className={styles.smallImg} />
      </div>
    </section>
  );
};

export default Security;
