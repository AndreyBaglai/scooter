import React from 'react';

import Burger from 'components/Burger';
import Button from 'components/Button';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';
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
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
        <Button>Купить</Button>
        <Burger />
      </Header>

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
    </>
  );
}

export default App;
