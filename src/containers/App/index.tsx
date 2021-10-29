import React, { useState } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Battery from './Sections/Battery';
import Description from './Sections/Description';
import Speed from './Sections/Speed';
import Design from './Sections/Design';
import Security from './Sections/Security';
import MobileApp from './Sections/MobileApp';
import Brand from './Sections/Brand';
import Reviews from './Sections/Reviews';
import Questions from './Sections/Questions';

const App: React.FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const onToggleMobileMenu = (event: React.MouseEvent) => {
    const mobileMenu = document.getElementById('mobileMenu') as HTMLElement;
    const target = event.target as HTMLElement;

    if (isOpenMobileMenu && (!target.closest('#mobileMenu') || target.closest('#closeIcon'))) {
      setIsOpenMobileMenu(false);
      mobileMenu.style.left = '-1000px';
    } else if (target.closest('#burgerIcon')) {
      setIsOpenMobileMenu(true);
      mobileMenu.style.left = '0';
    }
  };

  return (
    <div onClick={onToggleMobileMenu}>
      <Header onToggleMobileMenu={onToggleMobileMenu} />

      <Battery />
      <Description />
      <Speed />
      <Design />
      <Security />
      <MobileApp />
      <Brand />
      <Reviews />
      <Questions />

      <Footer />
    </div>
  );
};

export default App;
