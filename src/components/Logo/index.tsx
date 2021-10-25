import React from 'react';

import { ReactComponent as Logo } from 'sources/icons/logo.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  isOrange?: boolean;
}

const _Logo: React.FC<IProps> = ({ isOrange }) => {

  return <Logo className={cn(styles.logo, { [styles.orange]: isOrange })} />
};

export default _Logo;
