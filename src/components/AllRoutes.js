import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Form from './Form/form'

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   margin-top: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;


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

const AllRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(props) => (
                <FormContainer>
                    <Form  {...props}/>
                </FormContainer>
                )}
            />
        </Switch>
    )
} 

export default AllRoutes