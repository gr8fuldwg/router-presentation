import React from "react";
import waterdogs from './waterdogs.jpg';
import waterdogs2 from './waterdogs2.jpg';


class Dogs extends React.Component {

  
    render() {
    return (
      <div className="Dogs">
        <h1>Dogs!</h1>
        <img src={waterdogs} height="600" width="760" alt="dogs underwater pic" />
        <hr />
        <img src={waterdogs2} height="584" width="800" alt="more dogs underwater pic" />
      </div>
    );
  }
}

export default Dogs;
