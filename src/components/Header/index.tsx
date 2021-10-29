import React from 'react';

import MobileNavigation from 'components/MobileNavigation';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Button from 'components/Button';
import Burger from 'components/Burger';

import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  onToggleMobileMenu: (event: React.MouseEvent) => void;
}

const Header: React.FC<IProps> = ({ onToggleMobileMenu }) => {
  return (
    <header className={cn('container', styles.header)}>
      <MobileNavigation onCloseMobileMenu={onToggleMobileMenu} />
      <Logo />
      <Navigation />
      <Button>Купить</Button>
      <Burger onOpenMobileMenu={onToggleMobileMenu} />
    </header>
  );
};

export default Header;
