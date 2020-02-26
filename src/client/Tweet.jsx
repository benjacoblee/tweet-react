import React, { Component } from "react";

export class Tweet extends Component {
  render() {
    return (
      <div>
        <p class="mb-0">
          {this.props.tweetText}
          <a href={this.props.tweetLink}>Link to tweet</a>
        </p>
      </div>
    );
  }
}

export default Tweet;
