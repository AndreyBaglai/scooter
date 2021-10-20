import React from 'react';

import styles from './styles.module.scss';

const ToggleTheme: React.FC = () => {
  return (
    <div className={styles.toggle}>
      <span className={styles.white}>Белый</span>
      <span className={styles.black}>Черный</span>
    </div>
  );
};

export default ToggleTheme;
