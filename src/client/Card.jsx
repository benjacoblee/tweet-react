import React, { Component } from "react";
import Name from "./Name";
import Tweet from "./Tweet";
import Engagement from "./Engagement";
import Entities from "./Entities";
import ProfilePic from "./ProfilePic";

export class Card extends Component {
  render() {
    function stringWithoutLink(string) {
      return string.slice(0, string.indexOf("https"));
    }

    function linkWithoutString(string) {
      return string.slice(string.indexOf("https"), string.length);
    }
    const tweets = this.props.tweets.tweets;
    const tweetEl = tweets.map(tweet => {
      const userName = tweet.user.screen_name;
      const tweetText = tweet.text;
      const retweetCount = tweet.retweet_count;
      const favoriteCount = tweet.favorite_count;
      const createdAt = tweet.created_at;
      const entities = tweet.entities;
      const profilePic = tweet.user.profile_image_url;
      // console.log(tweet)
      return (
        <div class="row">
          <div class="col-2">
            <ProfilePic profilePic={profilePic} />
          </div>
          <div class="col-10">
            <Name userName={userName} createdAt={createdAt} />
            <Tweet
              tweetText={stringWithoutLink(tweetText)}
              tweetLink={linkWithoutString(tweetText)}
            />
            <Entities entities={entities} />
            <Engagement
              retweetCount={retweetCount}
              favoriteCount={favoriteCount}
            />
          </div>
          <hr />
        </div>
      );
    });
    return <div>{tweetEl}</div>;
  }
}

export default Card;
