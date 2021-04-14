import React, {useEffect, useState} from 'react'
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    useEffect(async () => {
        console.log("in protected route")
        const res =  await fetch('https://sarvsahayakapi.herokuapp.com/users/me', {
      headers: {
        authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })

    if (res.status===401){
        setIsAuthenticated(false)
    }
    else {
      setIsAuthenticated(true)
    }
    }, [])
    const Component = props.component
    return isAuthenticated ? <Component />  : <Redirect to="/login" />
} 

export default ProtectedRoute