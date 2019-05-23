import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Route, Redirect } from "react-router";

class Scanner extends Component {
  state = {
    result: "No result"
  };

  componentDidMount() {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          video: true
        },
        function(localMediaStream) {},
        function(err) {
          alert(
            "The following error occurred when trying to access the camera: " +
              err
          );
        }
      );
    } else {
      alert("Sorry, browser does not support camera access");
    }
  }

  handleScan = data => {
    if (data) {
      var obj = JSON.parse(data);
      this.setState({
        result: obj.bearerToken
      });

      window.location.href = "https://www.youtube.com/";
    }
  };

  handleError = err => {
    alert(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default Scanner;
