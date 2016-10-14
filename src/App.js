import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

import ReactPlayer from 'react-player';

class App extends Component {

  constructor() {
    super();
    this.state = {
      url: "https://media.giphy.com/media/RQIhi5u8eLEsM/giphy.gif",
      mimetype: "image/gif"
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const gifRef = rootRef.child('last_gif');
    gifRef.on('value', snap => {
      this.setState({
        url: snap.val().url,
        mimetype: snap.val().mimetype
      });
    })
  }

  render() {
    let GIFDisplay;
    if(this.state.mimetype === "image/gif") {
      GIFDisplay = <img src={this.state.url} alt="An amazing GIF"/>;
    } else if (this.state.mimetype === "video/mp4") {
      GIFDisplay = <ReactPlayer url={this.state.url} playing loop />;
    } else {
      GIFDisplay = <p> Not supposed to render anything for the following mimetype : {this.state.mimetype} </p>;
    }



    return (
      <div className="App">
        {GIFDisplay}
      </div>
    );
  }
}

export default App;
