import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,
} from "react-router-dom";
import Login from './pages/login/login';
import Signup from './pages/login/signup';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './styles';

const GlobalStyle = createGlobalStyle`{
  body {
    background-color: #f5f5f5 ;
    padding-top: 90px;
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
                <Redirect from="/" to="/signin" />
              </Switch>
            </StyledApp>
          </React.StrictMode>
        </Router>
    </>
  );
}

export default App;
