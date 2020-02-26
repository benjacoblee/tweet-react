import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import tweets from "tweets";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Card tweets={tweets} />
      </div>
    );
  }
}

const element = document.getElementById("app");

ReactDOM.render(<App />, element); //

console.log("tweet react");
