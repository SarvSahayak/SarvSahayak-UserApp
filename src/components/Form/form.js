import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'firstname',
        'cf-questions': 'What is your firstname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your lastname?'
      },{
        'tag': 'select',
        'type': 'radio',
        'isMultipleChoice': false,
        'isChacked' : false,
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
      },{
        'tag': 'input',
        'type': 'text',
        'name': 'address',
        'cf-questions': 'Enter Landmark'
      },{
        
        'tag': 'input',
        'type': 'text',
        'name': 'description',
        'cf-questions': 'Please describe the problem.'
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
    console.log("Formdata, obj:", formDataSerialized);
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