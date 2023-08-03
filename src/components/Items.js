import React, { Component } from "react";

export default class Items extends Component {
  render() {
    let { title, description, urlToImage, url, publishedAt, source } =
      this.props;
    let a = new Date(publishedAt);
    let time =
      a.toLocaleTimeString().split(" ")[0].split(":").slice(0, 2).join(":") +
      " " +
      a.toLocaleTimeString().split(" ")[1];
    let day = a.toDateString().split(" ")[0];
    let date = a.toDateString().split(" ").slice(1).join("-");
    let channel = source.name;
    return (
      <div className="card container mb-5" style={{ backgroundColor: ""}}>
        <img src={urlToImage} className="card-img mt-2" alt="..." style={{height:'15rem'}} />
        <div className="card-body">
          <h4 className="card-title" style={{fontSize: '20px'}}>{title}</h4>
          <p className="card-text disc" style={{fontSize: 'small'}}>{description} .....</p>

          <div className="d-flex justify-content-between">
            <div>
              <a href={url} target="blank" className="btn btn-sm btn-primary">
                Read Here
              </a>
            </div>
            <div>
              <span className="badge text-bg-danger">{channel}</span>
            </div>
          </div>
          <p className="card-text text-end">
            <small className="text-muted">{`${day}, ${date} ${time}`}</small>
          </p>
        </div>
      </div>
    );
  }
}
