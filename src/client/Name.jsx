import React, { Component } from "react";

export class Name extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>@{this.props.userName}</strong> {this.props.createdAt}
        </p>
      </div>
    );
  }
}

export default Name;
