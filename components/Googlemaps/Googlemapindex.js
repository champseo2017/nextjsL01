import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import $ from "jquery";
import CurrentLocation from './CurrentLocation';


export class Googlemapindex extends Component {
    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

    componentDidMount() {
        $("div.google-mapsapi > div").addClass('google-child');
    }

    

    onMarkerClick = (props, marker, e) => {
            this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
            });
    }

    onClose = () => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };

    render() {
        return (
            <div className="google-mapsapi" style={{ height: '100vh'}}>
                <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
                    <Marker
                        defaultPosition={{ lat: 18.7547027, lng: -99.0514312}}
                        onClick={this.onMarkerClick}
                        name={'ทดสอบ Marker'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </CurrentLocation>

                <style>{`
                .google-child {
                    width: 84% !important;
                    margin-left: 4% !important;
                    margin-right: 5% !important;
                }
            `}</style>
            </div>
        )

    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDyuU3rCO5q-EZly8Wmf6WJAdjKJ_1Zbt0'
})(Googlemapindex);