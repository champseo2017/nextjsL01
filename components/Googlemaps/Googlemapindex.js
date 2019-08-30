import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import $ from "jquery";
import CurrentLocation from "./CurrentLocation";
import { connect } from "react-redux";
import geolocation from "geolocation";
import { getaddressLocation } from "../../actions";

export class Googlemapindex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 13.72917,
      lng: 100.52389,
      stores: [{ latitude: 13.72917, longitude: 100.52389 }],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  componentDidMount() {
    this.fungetgeolocation();
    $(".parentclassmap > div").addClass("relativemap");
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  displayMarkersallow = () => {
    const { locations } = this.props;
    if (locations === null) {
      return true;
    }

    const splitlocation =
      locations.results[0].formatted.split(",") === null
        ? ""
        : locations.results[0].formatted.split(",");

    return (
      <Marker
        position={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        onClick={this.onMarkerClick}
        name={splitlocation[0]}
      />
    );
  };

  displayMarkersstore = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
          name={"Kenyatta International Convention Centre"}
        />
      );
    });
  };

  fungetgeolocation() {
    navigator.geolocation.getCurrentPosition(this.getPosition, this.error);
  }
  error = position => {
    console.log(position);
  };
  getPosition = position => {
    if (!position) return;
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    this.props.getaddressLocation(
      position.coords.latitude,
      position.coords.longitude
    );
  };

  render() {
    return (
      <div className="parentclassmap" style={{ height: "100vh" }}>
        <style>{`
                .relativemap {
                  position: relative !important;
              }
             `}</style>
        <Map
          google={this.props.google}
          zoom={18}
          centerAroundCurrentLocation={true}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          mapCenter={{ lat: this.state.lat, lng: this.state.lng }}
        >
          {this.displayMarkersallow()}
          {this.displayMarkersstore()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.valuelocation
  };
}

const mapDispatchToProps = {
  getaddressLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDyuU3rCO5q-EZly8Wmf6WJAdjKJ_1Zbt0"
  })(Googlemapindex)
);
