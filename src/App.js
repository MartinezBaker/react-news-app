import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,
} from "react-router-dom";
import Login from './pages/login/login';
import Signup from './pages/login/signup';
import Sources from './pages/preferences/sources';
import Categories from './pages/preferences/categories';
import backgroundAmerica from './assets/images/backgroundAmerica.jpg';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './styles';

const GlobalStyle = createGlobalStyle`{
  body {
    background: url(${backgroundAmerica}) no-repeat center center fixed;
    background-size: cover;
    padding-top: 50px;
  }
}`;

function App() {
   return (
    <>
      <GlobalStyle />
        <Router>
          <React.StrictMode>
            <StyledApp>
              <Switch>
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/source-preferences" component={Sources} />
                <Route path="/category-preferences" component={Categories} />
                <Redirect from="/" to="/signin" />
              </Switch>
            </StyledApp>
          </React.StrictMode>
        </Router>
    </>
  );
}

export default App;
