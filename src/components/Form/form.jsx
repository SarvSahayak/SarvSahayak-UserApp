import React from 'react';
import axios from 'axios'
import { ConversationalForm } from 'conversational-form'
import { BoxContainer } from '../accountBox/common';
// import { Redirect } from "react-router-dom";  


const url = 'https://sarvsahayakapi.herokuapp.com/complaints'

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

const userData = JSON.parse(localStorage.getItem('user'))
var lat
var long
function showPosition(position) {
  lat = position.coords.latitude
  long = position.coords.longitude
}
var NAME 
if (userData===null){
  NAME = 'USER'
}
else  {
  NAME = userData.name
}
getLocation()

export default class MyForm extends React.Component {
  
  constructor(props) {
  
    super(props);
    this.formFields = [
      {
        'tag': 'select',
        'type': 'radio',
        'placeholder':"Choose category",
        'cf-questions':`Hello ${NAME},\nChoose category of your issue`,
        'isMultipleChoice': false,
        'isChecked' : false,
        'children':[
           {
              "tag": "option",
              "cf-label": "Animal Abuse",
              "value": "0"
          },
          {
              "tag": "option",
              "cf-label": "Child Harassment",
              "value": "1"
          },
          {
              "tag": "option",
              "cf-label": "Women Harassment",
              "value": "2"
          },
          {
              "tag": "option",
              "cf-label": "Domestic violence",
              "value": "3"
          }
        ]
      },
      {
        
        'tag': 'input',
        'type': 'text',
        'name': 'description',
        'cf-questions': 'Please describe the problem.'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'address',
        'cf-questions': 'Enter incident location'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  
  }
  
  componentDidMount() {
    
    console.log(this.props)
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
    
  }
  
  submitCallback() {
    
    var formDataSerialized = this.cf.getFormData(true);
    var cat = formDataSerialized['tag-0']
    const category = parseInt(cat[0])
    this.cf.addRobotChatResponse(`Thank you 😊 \nYour complaint is being sent to our system.\nPlease wait for a while.`)
    delete formDataSerialized['tag-0']
    const data = {
      lat,
      long,
      description: formDataSerialized.description,
      category,
      address: formDataSerialized.address
    }
    // console.log(formDataSerialized)
    // console.log(data)
    // console.log("from react")
    axios.post(url, 
      data
    , {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken') 
      }
    }).then((res) => {
      if(res.status===201){
        this.cf.addRobotChatResponse(`Your complaint has been registered successfully!`)
      }
      else {
        this.cf.addRobotChatResponse(`Your complaint hasn't been registered!`)
      }
      //console.log(res.status)
    }
      
      
    ).catch((err) => {
      this.cf.addRobotChatResponse(`No ngo found in your locality.\nSorry for the inconvenience.`)
      // console.log(err)
    })

    // {name}
  }
  
  render() {
    return (
      <BoxContainer>
      <div style={{height: '50vh', border: '5px red',}}>
        <div
        style={{maxWidth: '95%'}}
          ref={ref => this.elem = ref}
        />
      </div>
      </BoxContainer>
    );
    
  }
}