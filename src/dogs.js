import React from "react";

class Dogs extends React.Component {
  onSubmit = () => {
      this.props.history.push('/');
  };
  
    render() {
    return (
      <div>
        <h1>Dogs!</h1>
        <button onClick={this.onSubmit}>MORE dogs!</button>
      </div>
    );
  }
}

export default Dogs;
