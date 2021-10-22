import React from 'react';

import { ReactComponent as Burger } from 'sources/icons/burger.svg';

import styles from './styles.module.scss';

const _Burger: React.FC = () => {
  return <Burger className={styles.burger} />
};

export default _Burger;