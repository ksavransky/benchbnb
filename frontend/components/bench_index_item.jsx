import React from 'react';

class BenchIndexItem extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    const { bench } = this.props;
    const { description, lng, lat } = bench;


    return (
      <li className="bench-index-item">
        {description}
      </li>
    );
  }
}

export default BenchIndexItem;
