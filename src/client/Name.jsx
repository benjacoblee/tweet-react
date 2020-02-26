import React, { Component } from "react";

export class Name extends Component {
  render() {
    return (
      <div>
        <p>{this.props.userName}</p>
      </div>
    );
  }
}

export default Name;
