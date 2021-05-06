import React, { createContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Route,Switch, Redirect } from "react-router-dom";
// import MyComplaint from './components/layout/mycompalints'
import "./App.css";

import { AccountBox } from "./components/accountBox";
import Navbar from './components/layout/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import AllRoutes from './components/AllRoutes'
// import mycomplaint from "./components/layout/mycompalints";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContext = createContext([null, () => {}])

function App() {

  return (
    <Router>

    <div>
      <Navbar/>
    <Switch>
    <Route
            exact
            path="/login"
            render={(props) => (
              <AppContainer>
                <AccountBox  {...props}/>
              </AppContainer>
            )}
          />
          <ProtectedRoute
            path="/"
            component={AllRoutes}
          />
          <Route
            render={(props) => (
              <AppContainer>
                <AccountBox  {...props}/>
              </AppContainer>
            )}
          />
          {/* <Route
            exact path="/"
            render={mycomplaint} /> */}
          <Redirect from="*" to="/" />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
