import React from 'react';

import Button from 'components/Button';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

const App: React.FC = () => {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
        <Button>Купить</Button>
      </Header>
    </>
  );
}

export default App;
