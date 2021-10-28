import React from 'react';

import styles from './styles.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <h4 className={styles.name}>Михаил Сафонов</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
          десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах
          Xiaomi - Удобства переноски (вес аппарата, развесовка).
        </p>
        <p className={styles.text}>
          В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе
          самоката.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Имя скрыто</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Владею также первой версией самоката (m365). В версии pro 2 исправлено множество
          недостатков m365:
        </p>
        <p className={styles.innerText}>- усилен узел складывания и язычок </p>
        <p className={styles.innerText}>
          - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку
          из-за тряски{' '}
        </p>
        <p className={styles.innerText}>
          - установлена поддержка заднего крыла и защита провода заднего габарита.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Алексей З.</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км
          и еще оставалось 16% заряда.
        </p>
        <p className={styles.text}>
          ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос
          от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными
        </p>
      </div>
    </div>
  );
};

export default Slider;
