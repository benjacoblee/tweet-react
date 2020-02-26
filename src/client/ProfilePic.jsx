import React, { Component } from "react";

export class ProfilePic extends Component {
  render() {
    
    return (
      <div>
        <img class="profile-pic" src={this.props.profilePic}></img>
      </div>
    );
  }
}

export default ProfilePic;