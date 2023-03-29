import React from 'react';
import { Router  } from 'react-router-dom';

import Routers from './routes';

import GlobalStyle from './styles/globalStyles';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();


export default function App() {

 
  return (
    <Router history={history}  >
      <GlobalStyle />
      <Routers />
    </Router>
  );
}

