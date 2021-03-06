import React from 'react';

import imgSrc1 from 'sources/images/security-1.png';
import imgSrc2 from 'sources/images/security-brake.png';
import imgSrc3 from 'sources/images/security-backlight.png';
import imgSrc4 from 'sources/images/security-reflection.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Peculiarities = () => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <h4 className={styles.columnTitle}>Яркие ходовые огни</h4>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
          других участников движения.
        </p>
        <img src={imgSrc1} alt="light" className={styles.columnImg} />
      </div>

      <div className={styles.column}>
        <h4 className={cn(styles.columnTitle, styles.second)}>Двойная тормозная система</h4>
        <div className={styles.line}></div>
        <p className={styles.text}>
          При нажатии наручку тормоза системы переднего и заднего колеса активируются
          последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.
        </p>
        <img src={imgSrc2} alt="brake" className={styles.columnImg} />
      </div>

      <div className={styles.column}>
        <h4 className={styles.columnTitle}>Яркая задняя фара</h4>
        <div className={styles.line}></div>
        <p className={styles.text}>
          При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку
          тормоза она начинает мигать, предупреждая других участников движения.
        </p>
        <img src={imgSrc3} alt="backlight" className={styles.columnImg} />
      </div>

      <div className={styles.column}>
        <h4 className={cn(styles.columnTitle, styles.second)}>Отражатели спереди, сбоку и сзади</h4>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время
          суток безопаснее.
        </p>
        <img src={imgSrc4} alt="reflection" className={styles.columnImg} />
      </div>
    </div>
  );
};

export default Peculiarities;
