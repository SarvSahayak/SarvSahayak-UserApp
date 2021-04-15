import React, { createContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

import "./App.css";

import { AccountBox } from "./components/accountBox";
import Navbar from './components/layout/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import AllRoutes from './components/AllRoutes'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const FormContainer = styled.div`
// html, body {
//     height:100%;
//     width: 70%;
//     background: #414141;
//     margin-top: 10px;
//     margin-left: 25% ;
//     margin-right: 25% ;
//   }
// `;


// const App = () => {
//   return (
//     <Router>
//     <div className="App">
//     {/* <Navbar /> */}

//     <Switch>
//       <Route exact path="/" component={AccountBox} Style={AppContainer} />
//       {/* <Route exact path="/form" component={Form} /> */}
//       {/* <AppContainer>
//         <AccountBox />
//       </AppContainer>
//       <Form />  */}
//       </Switch>
//     </div>
//     </Router>
//   );
// }

// 

// const Routes = () => {
//   const { state, dispatch } = useContext(UserContext);
//   const history = useHistory();
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user) {
//       
//     } else {
//       if (!history.location.pathname.startsWith("/reset"))
//         history.push("/login");
//     }
//   }, []);


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
    </Switch>
    </div>
    </Router>
  );
}

export default App;
