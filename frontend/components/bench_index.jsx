import React from 'react';

import BenchIndexItem from './bench_index_item.jsx';

class BenchIndex extends React.Component{
  componentDidMount(){
    this.props.requestBenches();
  }
  render(){
    const benchKeys = Object.keys(this.props.benches);
    return(
      <div>
        <h1>Benches: </h1>
        <ul className="benches-index">
          {benchKeys.map(benchKey =>
            <BenchIndexItem
            key={benchKey}
            bench={this.props.benches[benchKey]}/>)}
        </ul>
      </div>
    );
  }
}


export default BenchIndex;
