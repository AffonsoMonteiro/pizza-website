import React from 'react';
import { GlobalStyle } from './styles/globalStyles'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'


function App() {
  return (
    <BrowserRouter>

        <Routes />
        
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
