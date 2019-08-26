import React, { Component } from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import $ from "jquery";

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
            {/* bootstrap */}
                
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                <script
                src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                <link rel="shortcut icon" href="https://www.img.in.th/images/56eb79bdec4b3f2d58faa52defcc2b00.png"></link>
            {/* bootstrap */}
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