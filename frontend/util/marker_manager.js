export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
  }

  updateMarkers(benches){
    this.benches = benches;
    this._benchesToAdd().forEach(this._createMarkerFromBench);
  }

  _benchesToAdd(){
    const currentBenchIds = this.markers.map( marker => marker.benchId );
    const newBenches = this.benches;
    const newBenchIds = Object.keys(newBenches);

    return newBenchIds.reduce( (collection, benchId) => {
      if (!currentBenchIds.includes(benchId)) {
        return ( collection.concat( [newBenches[benchId]] ));
      }
    }, [] );
  }


  _createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: bench.id
    });
  }

}
