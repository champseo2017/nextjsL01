import React, { Component } from 'react'
import Layout from "./Layout";
import $ from "jquery";
import NextSeo from 'next-seo';
import Contacts from './Contacts'

const DEFAULT_SEO = {
    title: 'Contact Us',
    description: 'Contact Us',
  };
class Contactconfirm extends Component {
    componentDidMount() {
        let heightcheck = this.divheight.offsetHeight
        if(heightcheck < 600){
          $('body').find('.heightcon').addClass('fullHeight')
        }else{
          $('body').find('.heightcon').removeClass('fullHeight')
        }
    
      }
    render() {
        const {
            values:{
                contact_name,
                contact_email,
                contact_phone,
                contact_message
            },
            handleChange
        } = this.props
       
        return (
          
                <div>
                <div class="alert alert-success">
                <strong>Success!</strong> Indicates a successful or positive action.
                </div>
                <Contacts/>
                </div>
            
        )
    }
}

export default Contactconfirm