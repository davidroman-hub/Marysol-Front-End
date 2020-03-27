
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.43,
      lng: -99.16
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.439599}
            lng={-99.168653}
            text="MAR Y SOL"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;



