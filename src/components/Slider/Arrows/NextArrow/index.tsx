import React from 'react';

import { ReactComponent as NextArrowIcon } from 'sources/icons/next-arrow.svg';

import styles from './styles.module.scss';

interface IProps {
  onClick?: any;
}

const NextArrow: React.FC<IProps> = ({ onClick }) => {
  return <NextArrowIcon className={styles.nextArrow} onClick={onClick} />;
};

export default NextArrow;
