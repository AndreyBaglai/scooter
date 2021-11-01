import React from 'react';

import NavLink from './NavLink';

import styles from './styles.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.nav}> 
        <li>
          <NavLink>О продукте</NavLink>
        </li>
        <li>
          <NavLink>Внешний вид</NavLink>
        </li>
        <li>
          <NavLink>Безопасность</NavLink>
        </li>
        <li>
          <NavLink>Отзывы</NavLink>
        </li>
        <li>
          <NavLink>FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
