import React from 'react';

import { ReactComponent as PrevArrowIcon } from 'sources/icons/prev-arrow.svg';

import styles from './styles.module.scss';

interface IProps {
  onClick?: any;
}

const PrevArrow: React.FC<IProps> = ({ onClick }) => {
  return <PrevArrowIcon className={styles.prevArrow} onClick={onClick} />;
};
export default PrevArrow;
