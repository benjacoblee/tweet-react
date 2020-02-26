import React, { Component } from "react";

export class Profile extends Component {
  render() {
    const tweetInfo = this.props.tweetInfo;
    return (
      <div>
        <p>{tweetInfo.user.screen_name}</p>
        <p>
          <strong>@{tweetInfo.user.screen_name}</strong>
        </p>
        <div class="row">
          <div class="col-6">Following: {tweetInfo.user.friends_count}</div>
          <div class="col-6"> Followers: {tweetInfo.user.followers_count}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
