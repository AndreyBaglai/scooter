import React from 'react';

import Button from 'components/Button';
import Preview from '../Preview';

import leftEllipseSrc from 'sources/images/ellipses/left-questions.png';
import rightEllipseSrc from 'sources/images/ellipses/right-questions.png';
import leftLineSrc from 'sources/images/lines/questions.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Questions: React.FC = () => {
  return (
    <>
      <section className={cn('container', styles.questions)}>
        <img src={leftEllipseSrc} className={styles.leftEllipse} alt="left ellipse" />
        <img src={rightEllipseSrc} className={styles.rightEllipse} alt="right ellipse" />

        <img src={leftLineSrc} className={styles.lineIcon} alt="line" />

        <div className={styles.description}>
          <div className={styles.title}>Часто задаваемые вопросы</div>
          <p className={styles.text}>
            Все ваши часто задаваемые вопросы о электросамокате Mi Scooter Pro 2.
          </p>
          <p className={styles.text}>
            Если у вас есть собственный вопрос - задайте его через форму обратной связи.
          </p>
          <Button>Задать вопрос</Button>
        </div>

        <ul className={styles.questionsList}>
          <li>
            <h4 className={styles.question}>На него нужны права категории M?</h4>
            <div className={styles.orangeLine}></div>
            <p className={styles.answer}>
              Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
              других участников движения.
            </p>
          </li>

          <li>
            <h4 className={styles.question}>У меня вес 135 кг, выдержит ли этот самокат?</h4>
            <div className={styles.orangeLine}></div>
            <p className={styles.answer}>
              Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.
            </p>
          </li>

          <li>
            <h4 className={styles.question}>Есть ли влагозащита?</h4>
            <div className={styles.orangeLine}></div>
            <p className={styles.answer}>
              Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг,
              падающих в любом направлении. Погружение в воду может привести к поломке.
            </p>
          </li>

          <li>
            <h4 className={styles.question}>Это версия для Китая или Европы?</h4>
            <div className={styles.orangeLine}></div>
            <p className={styles.answer}>
              Это Европейская версия, со всеми обновлениями и евро-вилкой.
            </p>
          </li>
        </ul>
      </section>
      <Preview />
    </>
  );
};

export default Questions;
