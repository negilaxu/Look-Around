import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height:''}}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }
}
