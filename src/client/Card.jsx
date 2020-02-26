import React, { Component } from "react";
import Name from "./Name";
import Tweet from "./Tweet";
import Engagement from "./Engagement";
import Entities from "./Entities"

export class Card extends Component {
  render() {
    const tweets = this.props.tweets.tweets;
    const tweetEl = tweets.map(tweet => {
      console.log(tweet);
      const userName = tweet.user.screen_name;
      const tweetText = tweet.text;
      const retweetCount = tweet.retweet_count;
      const favoriteCount = tweet.favorite_count;
      const createdAt = tweet.created_at
      const entities = tweet.entities;
      return (
        <div>
          <Name userName={userName} createdAt={createdAt} />
          <Tweet tweetText={tweetText} />
          <Entities entities={entities} />
          <Engagement
            retweetCount={retweetCount}
            favoriteCount={favoriteCount}
          />
          <hr/>
        </div>
      );
    });
    return <div>{tweetEl}</div>;
  }
}

export default Card;
