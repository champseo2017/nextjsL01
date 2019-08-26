import React, { Component } from 'react'
import Contacts from '../components/Contacts'
import Contactconfirm from '../components/Contactconfirm'
import axios from 'axios';

class Contact extends Component {
    
    state = {
        step: 1,
        contact_name: '',
        contact_email: '',
        contact_phone: '',
        contact_message:'',
        confirmsend:'',
    }
   
    // Proceed to next step
    nextStep = () => {
        let contact_name = this.state.contact_name
        let contact_email = this.state.contact_email
        let contact_phone = this.state.contact_phone
        let contact_message = this.state.contact_message
        let confirmsend = this.state.confirmsend
        let self = this;
        axios({
            method: "post",
            url: "https://restapiwp.saleallday.com/wp-json/contact/v1/send",
            data: { 
                contact_name:contact_name,
                contact_email:contact_email,
                contact_phone:contact_phone,
                contact_message:contact_message
            }
          })
          .then(function (response) {
            if(response.data.sucess == 1){
                self.setState({confirmsend: 1})
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

   

    // Go back to prev step
    resetinput = () => {
        this.setState({
            contact_name: '',
            contact_email: '',
            contact_phone: '',
            contact_message:''
        })
    }

     // Handle fields change
     handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state;
        const {contact_name, contact_email, contact_phone, contact_message, confirmsend} = this.state 
        const sucesssend = {confirmsend}
        const values = {contact_name, contact_email, contact_phone, contact_message}
        switch(step){
            case 1 :
                return (
                    <Contacts
                        nextStep={this.nextStep}
                        sucesssend = {sucesssend}
                        resetinput={this.resetinput}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default Contact
