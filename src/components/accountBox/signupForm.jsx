import React, { useContext, useState } from "react"
import axios from "axios"
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ name, setName ] = useState("")
  const [ mobileNo, setMobileNo ] = useState("")
  const submit = () => {
    const data = {
        name,email,password,mobileNo
    }
    axios.post('https://sarvsahayakapi.herokuapp.com/users',
      data
    )
    .then(response => {
      console.log(response.status)
      if (response.status===201){
        localStorage.setItem("authToken",response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        props.history.push("/")
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" value={name} onChange={(e) =>setName(e.target.value)}/>
        <Input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <Input type="mobileNo" placeholder="Mobile No." value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick = {submit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="/form">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
