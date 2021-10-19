import React from 'react';

import Button from 'components/Button';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

import { ReactComponent as Logo } from 'sources/icons/logo.svg';

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
