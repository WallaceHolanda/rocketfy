import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';
import List from './components/List';

function App() {
  return (
    <>
      <Header />
      <Board />

      <GlobalStyle />
    </>
  );
}

export default App;
