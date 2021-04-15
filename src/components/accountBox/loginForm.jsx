import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  useEffect(async () => {
        const res =  await fetch('https://sarvsahayakapi.herokuapp.com/users/me', {
      headers: {
        authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })

    if (res.status===200){
        props.history.push("/")
    }
    }, [])

  const submit = () => {
    const data = {
     email,
     password
    }
    axios.post('https://sarvsahayakapi.herokuapp.com/users/login',
    data
    )
    .then(response => {
      console.log(response.status)
      console.log(props)
      localStorage.setItem("authToken",response.data.token)
      console.log(response)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      props.history.push("/")
    })
    .catch(function(error) {
      if(error.response.status){
        toast.error(`Incorrect Email-id or password`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })

      }
    }
    )
    
            
}
  return(
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submit}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
      <ToastContainer />
    </BoxContainer>
  )
}
