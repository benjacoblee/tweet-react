import React, { Component } from "react";

export class Tweet extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.tweetText}
          <a href={this.props.tweetLink}>Link goes somewhere</a>
        </p>
      </div>
    );
  }
}

export default Tweet;
