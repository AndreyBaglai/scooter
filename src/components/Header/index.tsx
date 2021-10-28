import React from 'react';

import cn from 'classnames';
import MobileNavigation from 'components/MobileNavigation';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Button from 'components/Button';
import Burger from 'components/Burger';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const onOpenMobileMenu = () => {
    const menu = document.getElementById('mobileMenu') as HTMLElement;
    if (menu) menu.style.left = '0';
  };

  const onCloseMobileMenu = () => {
    const menu = document.getElementById('mobileMenu') as HTMLElement;
    if (menu) menu.style.left = '-1000px';
  };

  return (
    <header className={cn('container', styles.header)}>
      <MobileNavigation onCloseMobileMenu={onCloseMobileMenu} />
      <Logo />
      <Navigation />
      <Button>Купить</Button>
      <Burger onOpenMobileMenu={onOpenMobileMenu} />
    </header>
  );
};

export default Header;
