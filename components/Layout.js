import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import $ from "jquery";
import '../scss/bootstrap.min.scss'

class Layout extends Component {
    componentDidMount(){
        let pathname = window.location.pathname;
        let res = pathname.split("/");
        
        let i;
        for (i = 0; i < res.length; i++) {
            if(res[1] == 'contact'){
                var w = window.innerWidth;
                console.log(w);
                if(w == 812){
                    $("body").find('.contact-class').css("height", "unset");
                    $("body").find('.mobile').css("padding-top", "0rem");
                }else if(w > 1200){
                    $("body").find('.contact-class').css("height", "100vh");
                }
            }
        }
        
    }
    render() {
        return (
            <div>
            <Navbar/>
            <div className="container justify-content-between heightcon">
                {this.props.children}
             </div>
             <Footer/>
             <style>{`
            /* Smartphones (portrait and landscape) ----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
                .container.justify-content-between.fullHeight.heightcon {
                    height: unset;
                }
            }

           
            /* Smartphones (portrait) ----------- */
            @media only screen and (max-width: 320px) {
                .container.justify-content-between.fullHeight.heightcon {
                    height: unset;
                }
            }

            /* iPads (portrait and landscape) ----------- */
            @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
                .container.justify-content-between.heightcon {
                    height: unset;
                }
            }

            /* iPads (landscape) ----------- */
            @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
                .container.justify-content-between.heightcon {
                    height: unset;
                }

            }

            /* iPads (portrait) ----------- */
            @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
                .container.justify-content-between.heightcon {
                    height: unset !important;
                }
            }

            /* Desktops and laptops ----------- */
            @media only screen and (min-width: 1224px) {
                .container.justify-content-between.heightcon {
                    height: unset;
                }
            }

            /* Large screens ----------- */
            @media only screen and (min-width: 1824px) {
                .container.justify-content-between.heightcon {
                    height: unset;
                }
            }

            /* iPhone 5 (portrait &amp; landscape)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
                .container.justify-content-between.fullHeight.heightcon {
                    height: unset;
                }
            }

            /* iPhone 5 (landscape)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: landscape) {
                .container.justify-content-between.fullHeight.heightcon {
                    height: unset;
                }
            }

            /* iPhone 5 (portrait)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
                .container.justify-content-between.fullHeight.heightcon {
                    height: unset;
                }
            }
          `}</style>
         </div>
        )
    }
   
}

export default Layout;