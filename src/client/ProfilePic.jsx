import React, { Component } from "react";

export class ProfilePic extends Component {
  render() {
    console.log(this.props.profilePic);
    return (
      <div>
        <img src={this.props.profilePic}></img>
      </div>
    );
  }
}

export default ProfilePic;
