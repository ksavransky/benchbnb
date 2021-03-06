import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/marker_manager.js';
// import { withRouter } from 'react-router';

class BenchMap extends React.Component{

  componentDidMount(){
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
      return <div className="map" ref="map">Map</div> ;
    }

}


export default BenchMap;
