import React from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

const Header: React.FC = ({ children }) => {
  return <header className={cn('container', styles.header)}>{children}</header>;
};

export default Header;
