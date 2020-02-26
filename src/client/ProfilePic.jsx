import React, { Component } from "react";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import Profile from "./Profile";

export class ProfilePic extends Component {
  render() {
    function renderTooltip(props) {
      return (
        <Tooltip {...props}>
          <Profile tweetInfo={this.props.tweetInfo} />
        </Tooltip>
      );
    }

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">
          {this.props.tweetInfo.user.screen_name}
        </Popover.Title>
        <Popover.Content>
          <Profile tweetInfo={this.props.tweetInfo} />
        </Popover.Content>
      </Popover>
    );
    return (
      <div>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip.bind(this)}
        >
          <img class="profile-pic" src={this.props.profilePic}></img>
        </OverlayTrigger>
      </div>
    );
  }
}

export default ProfilePic;
