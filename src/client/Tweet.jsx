import React, { Component } from "react";

export class Tweet extends Component {
  render() {
    return (
      <div>
        <p>{this.props.tweetText}</p>
      </div>
    );
  }
}

export default Tweet;
