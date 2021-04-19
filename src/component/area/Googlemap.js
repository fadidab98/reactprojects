import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Googlemap extends Component {
    render() {
        return (
            <Map style={{width:"80%", height:"80vh",marginTop:"100px",marginBottom:"150px",margin:"auto"}} google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                
            </InfoWindow>
          </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBdq7uVoF_dlNr8LMMgB1gMo6rOWWUjQ0U")
  })(Googlemap)
