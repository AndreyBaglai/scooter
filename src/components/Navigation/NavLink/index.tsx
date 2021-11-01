import React from 'react';

import styles from './styles.module.scss';

const NavLink: React.FC = ({ children }) => {
  return (
    <div>
       <a className={styles.link} href="/#">{children}</a>
    </div>
  )
}

export default NavLink;
