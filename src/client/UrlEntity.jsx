import React, { Component } from "react";

export class UrlEntity extends Component {
  render() {
    console.log(this.props.url, "FROM URL ENTITITYYY");
    if (this.props.url.length != 0) {
      return <a href={this.props.url}>Link to media</a>;
    } else {
      return "";
    }
  }
}

export default UrlEntity;
