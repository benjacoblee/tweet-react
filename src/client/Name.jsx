import React, { Component } from "react";

export class Name extends Component {
  render() {
    return (
      <div>
        <p>
          @{this.props.userName} {this.props.createdAt}
        </p>
      </div>
    );
  }
}

export default Name;
