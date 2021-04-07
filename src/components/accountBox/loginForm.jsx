import React, { useContext, useState } from "react";
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
      localStorage.setItem("authToken",response.data.token)
    })
    .catch(err => console.log(err))
}

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email} onChange={(e) =>{console.log(e.target.value); setEmail(e.target.value)}}/>
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
    </BoxContainer>
  );
}
