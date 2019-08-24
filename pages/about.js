import React, { Component } from 'react'
import Layout from "../components/Layout";
import $ from "jquery";
class About extends Component {
  componentDidMount() {
    let heightcheck = this.divheight.offsetHeight
    if(heightcheck < 600){
      $('body').find('.heightcon').addClass('fullHeight')
    }else{
      $('body').find('.heightcon').removeClass('fullHeight')
    }

  }
  render() {
    return (
      <Layout>
      <div ref={(div) =>{this.divheight = div; }}>
        <h1>About BitzPrice</h1>
        <p>Appliction to view Bitcoin prices</p>
       </div>
    </Layout>
    )
  }
}

export default About;