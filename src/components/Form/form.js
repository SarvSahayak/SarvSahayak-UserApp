import React from 'react';
import { ConversationalForm } from 'conversational-form';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
var lat
var long
function showPosition(position) {
  lat = position.coords.latitude
  long = position.coords.longitude
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
        'cf-questions':'Choose category of your issue',
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
    formDataSerialized.lat = lat
    formDataSerialized.long = long
    var cat = formDataSerialized['tag-0']
    formDataSerialized.category = parseInt(cat[0])
    delete formDataSerialized['tag-0']
    console.log(formDataSerialized);
    // {name}
    this.cf.addRobotChatResponse(`Thank you 😊 \nYour complaint is registered with our database.\nWe will connect you soon`)
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}