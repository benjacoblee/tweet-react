import React, { Component } from "react";

export class Name extends Component {
  render() {
    return (
      <p class="mb-0">
        <strong>@{this.props.userName}</strong> {this.props.createdAt}
        <img src={this.props.profilePic}></img>
      </p>
    );
  }
}

export default Name;
