import React, { Component } from "react";

export class Name extends Component {
  render() {
    console.log(this.props, "NAMEMEMEM");
    return (
      <p>
        <strong>@{this.props.userName}</strong> {this.props.createdAt}
        <img src={this.props.profilePic}></img>
      </p>
    );
  }
}

export default Name;
