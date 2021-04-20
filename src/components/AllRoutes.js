import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Form from './Form/form.jsx'
import '../App.css'
// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   margin-top: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

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

const AllRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(props) => (
                // <FormContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8 offset-lg-2">
                            <div className="form-container">
                                <div className="form-container-inner">
                    <Form  {...props}/>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
              
                )}
            />
        </Switch>
    )
} 

export default AllRoutes