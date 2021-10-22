import React from 'react';

import Burger from 'components/Burger';
import Button from 'components/Button';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';
import Footer from 'components/Footer';

import Battery from './Battery';
import Description from './Description';
import Speed from './Speed';
import Design from './Design';
import Security from './Security';
import MobileApp from './MobileApp';
import Brand from './Brand';
import Reviews from './Reviews';
import Questions from './Questions';

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
