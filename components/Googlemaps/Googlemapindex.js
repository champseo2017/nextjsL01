import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import $ from "jquery";
import CurrentLocation from './CurrentLocation';
import { connect } from 'react-redux'
import geolocation from 'geolocation'

const t = null;
export class Googlemapindex extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 18.7547095, lng: 99.05143679999999},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}]
        }
      }
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.lat,
           lng: store.lng
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }

      displayMarkers2 = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
      
    test(){
        
        geolocation.getCurrentPosition(function (err, position) {
            if (err) throw err
            console.log(position)
        })
    }
      render() {
           
        return (
            <Map
              google={this.props.google}
              zoom={18}
              initialCenter={{ lat: 18.7547095, lng: 99.05143679999999}}
            >
              
              {this.displayMarkers()}
              {this.displayMarkers2()}
            </Map>
        );
      }
}





export default GoogleApiWrapper({
    apiKey: 'AIzaSyDyuU3rCO5q-EZly8Wmf6WJAdjKJ_1Zbt0'
})(Googlemapindex);