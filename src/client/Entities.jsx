import React, { Component } from "react";
import UrlEntity from "./UrlEntity";

export class Entities extends Component {
  render() {
    const UrlEntityElement = this.props.entities.urls.map(url => {
      if (url.length != 0) {
        return url.url;
      }
    });

    return (
      <div>
        <UrlEntity url={UrlEntityElement} />
      </div>
    );
  }
}

export default Entities;
