import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import Loader from './Loader/Loader'
const ProtectedRoute = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [isSuccessful, setIsSuccessful] = useState(false)
    useEffect( async () => {
    //   async funtion fetchData() => {
    //     const res = await fetch('https://sarvsahayakapi.herokuapp.com/users/me', {
    //   headers: {
    //     authorization: "Bearer " + localStorage.getItem("authToken"),
    //   },
    // })
    //   }
        //console.log("in protected route")
        const res =  await fetch('https://sarvsahayakapi.herokuapp.com/users/me', {
      headers: {
        authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })

    if (res.status===401){
        setIsAuthenticated(false)
        setIsSuccessful(false)
    }
    else {
      setIsAuthenticated(true)
      setIsSuccessful(true)
    }
    }, [])
    const Component = props.component
    return !isSuccessful && isAuthenticated ? <Loader /> : isSuccessful && isAuthenticated ? <Component /> : <Redirect to="/login" />
} 

export default ProtectedRoute