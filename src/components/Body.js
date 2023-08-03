import React, { Component } from "react";
import Items from "./Items";
import Spinner from "./Spinner";

export default class Body extends Component {
  static defaultProps={
    category:'general'
  }
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      tot_res: 0,
      loading: false,
    };
    this.cap_first()
  }
  cap_first=()=>{
    let temp=this.props.category[0].toUpperCase()
    let text=temp+this.props.category.slice(1)
    document.title=`News App Project - ${text}`
  }
  async componentDidMount() {
    this.props.lb_func(20)
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3cf235ea550244f18735e094166f0c8a&page=1&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.lb_func(50)
    let json_data = await data.json();
    this.props.lb_func(70)
    this.setState({
      items: json_data.articles,
      tot_res: json_data.totalResults,
      loading: false,
    });
    this.props.lb_func(100)
  }
  prev_page = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3cf235ea550244f18735e094166f0c8a&page=${
      this.state.page - 1
    }&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    this.setState({
      items: json_data.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  next_page = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3cf235ea550244f18735e094166f0c8a&page=${
      this.state.page + 1
    }&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    this.setState({
      items: json_data.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <div className="mt-5 container" style={{ backgroundColor: "" }}>
          <h2>
            <span>Top </span>
            <span style={{ color: " #8e16d3 " }}>
              <strong> Headlines</strong>
            </span>
          </h2>
          <div className="row mt-5">
              {this.state.loading && <Spinner/>}
              {!this.state.loading && this.state.items.map((ele) => {
                if (ele.urlToImage !== null) {
                  return (
                    <div
                      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5 container"
                      key={ele.url}
                      style={{ backgroundColor: "" }}
                    >
                      <Items
                        title={ele.title ? ele.title.slice(0, 35) : ""}
                        description={
                          ele.description ? ele.description.slice(0, 90) : ""
                        }
                        urlToImage={ele.urlToImage}
                        url={ele.url}
                        publishedAt={ele.publishedAt}
                        source={ele.source}
                      />
                    </div>
                  );
                }
              })}
            </div>
        </div>

        <div className="d-flex justify-content-end ml-auto w-100 extr_paging"
        style={{ backgroundColor: "lightgray" }}
        >
          <div
            className="py-3 px-3 d-flex justify-content-center rounded"
          >
            <span className="btn btn-outline-dark mx -1 disabled">{this.state.page - 1}</span>
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn mx-1"
              style={{border:0}}
              onClick={this.prev_page}
            >
              &larr; Previous
            </button>
            <button
            disabled={Math.ceil(this.state.tot_res / 9) === this.state.page}
            type="button"
            className="btn mx-1"
            onClick={this.next_page}
            style={{border:0}}
            >Next &rarr;
            </button>
            <span
            className="btn btn-outline-dark mx-1 disabled">
                {this.state.page < Math.ceil(this.state.tot_res / 9)
                  ? this.state.page + 1
                  : ""}
              </span>
          </div>
        </div>
      </>
    );
  }
}

// 3cf235ea550244f18735e094166f0c8a
