import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { UserForm } from './components/userPages/UserForm';
import Form from './components/Form/form'
import { BrowserRouter as Router,Route,Switch, withRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import { Style } from "@material-ui/icons";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
html, body {
    height:100%;
    width: 70%;
    background: #414141;
    margin-top: 10px;
    margin-left: 25% ;
    margin-right: 25% ;
  }
`;


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

function App() {
  return (
    <Router>

    <div>
    {/* <Switch> */}
    <AppContainer>
    <Route exact path="/" component={AccountBox} />
    </AppContainer>
    {/* <AppContainer>
      <AccountBox />
    </AppContainer> */}

    <FormContainer>
       <Route exact path="/form" component={Form} />
    </FormContainer>
    {/* </Switch> */}
    </div>
    </Router>
  );
}

export default App;
