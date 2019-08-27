import React, { Component } from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import $ from "jquery";
import "../static/bootstrap.min.css"
import "../static/font-awesome.min.css"

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
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="shortcut icon" href="https://www.img.in.th/images/56eb79bdec4b3f2d58faa52defcc2b00.png"></link>
                <style>{`
                html,body{
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                div#__next {
                    height: 100%;
                }
                .fullHeight {
                    height: 100vh;
                  }

                  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    line-height: 1.2;
                    color: #000000;
                }
                 
            `}</style>
            </Head>    
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