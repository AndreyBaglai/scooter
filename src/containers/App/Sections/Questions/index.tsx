import React from 'react';

import Button from 'components/Button';

import QuestionsList from './QuestionsList';
import Preview from './Preview';

import ellipseSrc from 'sources/images/ellipses/questions.png';
import lineSrc from 'sources/images/lines/questions.png';

import styles from './styles.module.scss';
import cn from 'classnames';

const Questions: React.FC = () => {
  return (
    <>
      <section className={cn('container', styles.questions)}>
        <img src={ellipseSrc} className={styles.ellipse} alt="ellipse" />

        <img src={lineSrc} className={styles.lineIcon} alt="line" />

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

        <QuestionsList />
      </section>

      <Preview />
    </>
  );
};

export default Questions;
