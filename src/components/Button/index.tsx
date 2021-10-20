import React from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  isOrange?: boolean;
}

const Button: React.FC<IProps> = ({ isOrange, children }) => {
  return <button className={cn(styles.btn, { [styles.orange]: isOrange })}>{children}</button>;
};

export default Button;
