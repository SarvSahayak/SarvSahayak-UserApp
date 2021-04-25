import React, { useContext, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import styled from "styled-components";
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
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ iserror, setIserror ] = useState("")
  const [ name, setName ] = useState("")
  const [ mobileNo, setMobileNo ] = useState("")
  
  
  const checkvalidation = (e) =>{
    
    setConfirmPassword(e.target.value)
    
  };

  const isdiabled=()=>{
    if(!email || !name || !password || !mobileNo || !confirmPassword){
    return true
    }
    return false
  }

  const validateEmail = (e) => {
   setEmail(e.target.value) 
  }
  const validatePhoneNumber = (number) => {
    setMobileNo(number.target.value)
   }
  
  const submit = () => {
    const data = {
        name,email,password,mobileNo
    }
    if(name.length==0 || email.length==0 || password.length ==0 || mobileNo.length==0){
      toast.error("Properly fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      return;
    }

    
    if (!validator.isEmail(email)) {
      toast.error("Enter valid Email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      return;
    }


    if(!validator.isMobilePhone(mobileNo) || mobileNo.length<10){
      toast.error("Enter valid MobileNumber", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    return ;
    }
    


    let vari=0;
    if(password.length < 8){
      // console.log("password short");
      // vari =1;
      toast.error("Password size must grater than 8 characters ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      return;
    }
    if(password != confirmPassword){
      // console.log("cnf pass and pass not match")
      toast.error("confirm password and password doesn't match ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      return;
    }
    // checkvalidation()
    // if(vari===0){
    axios.post('https://sarvsahayakapi.herokuapp.com/users',
      data
    )
    .then(response => {
      // console.log(response.status)
      if (response.status===201){
        localStorage.setItem("authToken",response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        window.location.href = "/"

      } else if(response.status===400){
        //console.log("test");
      }
    })
    .catch(function(error) {
      if(error.response.status){
        toast.info(`${email} Email is already registred with us`, {
          position: "top-center",
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
  // }
   

  return (
    <BoxContainer>
      <FormContainer>
      <div style={{width: 50 , position:"absolute",top:20,marginLeft:330}} >
        {"error label"}
      </div>
        <Input type="text" placeholder="Full Name" value={name} onChange={(e) =>setName(e.target.value)}/>
        <Input type="email" placeholder="Email" value={email} onChange={(e) =>validateEmail(e)}/>
        <Input type="tel" placeholder="Mobile No." value={mobileNo} minlength="10" maxLength="10" onChange={(e) => validatePhoneNumber(e)}/>
        <Input type="password" placeholder="Password" value={password} minlength="8" onChange={(e) =>setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" value={confirmPassword}onChange={(e) => checkvalidation(e)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} /> 
      <SubmitButton id ={'submitbtn'}type="submit" disabled={isdiabled()} onClick = {submit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Already have an account?
        <BoldLink href="/signin" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
      <ToastContainer />
    </BoxContainer>
    
  );
}
