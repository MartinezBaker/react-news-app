import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Sources from "./pages/preferences/Sources";
import Categories from "./pages/preferences/Categories";
import NewsPage from "./pages/news/NewsPage";
import Search from "./App Components/Search";
import { HomeSVG} from "./App Components/SVG";
import backgroundEarth from "./assets/images/backgroundEarth.jpg";
import { createGlobalStyle } from "styled-components";
import {
  StyledApp,
  FlexDiv,
  StyledButton,
  ButtonFlex,
  HomeSVGContainer,
  StyledHomeButton,
  AppContainer,
} from "./styles";

const GlobalStyle = createGlobalStyle`{
  body {
    background: url(${backgroundEarth}) no-repeat center center fixed;
    background-size: cover;
    padding: 0 40px 0 40px;
    font-family: 'Cambria', sans-serif;
  }
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <React.StrictMode>
          <AppContainer>
            <FlexDiv>
              <Search />
              <ButtonFlex>
                <Link to="/your-stories"><StyledHomeButton><HomeSVGContainer><HomeSVG /></HomeSVGContainer></StyledHomeButton></Link>
                <Link to="/signin"><StyledButton>Sign in</StyledButton></Link>
                <Link to="/signup"><StyledButton>Sign up</StyledButton></Link>
              </ButtonFlex>
            </FlexDiv>
            <StyledApp>
              <Switch>
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/category-preferences" component={Categories} />
                <Route path="/your-stories" component={NewsPage} />
                <Redirect from="/" to="/your-stories" />
              </Switch>
            </StyledApp>
          </AppContainer>
        </React.StrictMode>
      </Router>
    </>
  );
}

export default App;
