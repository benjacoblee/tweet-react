import React, { Component } from "react";
import Name from "./Name";
import Tweet from "./Tweet";

export class Card extends Component {
  render() {
    const tweets = this.props.tweets.tweets;
    const tweetEl = tweets.map(tweet => {
      console.log(tweet);
      const userName = tweet.user.screen_name;
      const tweetText = tweet.text;
      return (
        <div>
          <Name userName={userName} />
          <Tweet tweetText={tweetText} />
        </div>
      );
    });
    return <div>{tweetEl}</div>;
  }
}

export default Card;
