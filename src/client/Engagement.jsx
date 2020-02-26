import React, { Component } from "react";

export class Engagement extends Component {
  render() {
    return (
      <div class="row my-3">
        <div class="col-6">
          <i class="fas fa-retweet"></i>
          {this.props.retweetCount}
        </div>
        <div class="col-6">
          <i class="fas fa-heart"></i>
          {this.props.favoriteCount}
        </div>
      </div>
    );
  }
}

export default Engagement;
