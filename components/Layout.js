import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import $ from "jquery";
import '../scss/bootstrap.min.scss'

class Layout extends Component {
    componentDidMount() {
        let divcon = this.divcontainer.offsetHeight
        if(divcon < 600){
            $('body').find('.heightcon').addClass('fullHeight')
          }else{
            $('body').find('.heightcon').removeClass('fullHeight')
          }
      }
    
    render() {
       
        return (
            <div>
            <Navbar/>
            <div ref={(div) =>{this.divcontainer = div; }} className="container justify-content-between fullHeight heightcon">
                {this.props.children}
             </div>
             <Footer/>
         </div>
        )
    }
   
}

export default Layout;