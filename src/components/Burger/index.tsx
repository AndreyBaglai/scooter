import React from 'react';

import { ReactComponent as Burger } from 'sources/icons/burger.svg';

import styles from './styles.module.scss';

interface IProps {
  onOpenMobileMenu: () => void;
}

const _Burger: React.FC<IProps> = ({ onOpenMobileMenu }) => {
  return <Burger className={styles.burger} onClick={onOpenMobileMenu} />
};

export default _Burger;