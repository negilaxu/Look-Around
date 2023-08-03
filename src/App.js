// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Body from './components/Body';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state={
    progress:20
  }
  func=(progress)=>{
    this.setState({progress:progress})
  }
  render() 
  {
    return (
      <>
      <Router>
        <Navbar/>        
        <LoadingBar color='red' progress={this.state.progress}/>
        <Routes>
          <Route exact path={"/"} element={<Body lb_func={this.func} key="general" category="general" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/business"} element={<Body lb_func={this.func} key="business" category="business" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/entertainment"} element={<Body lb_func={this.func} key="entertainment" category="entertainment" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/general"} element={<Body lb_func={this.func} key="general" category="general" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/health"} element={<Body lb_func={this.func} key="health" category="health" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/science"} element={<Body lb_func={this.func} key="science" category="science" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/sports"} element={<Body lb_func={this.func} key="sports" category="sports" />}/>
        </Routes>
        <Routes>
          <Route exact path={"/technology"} element={<Body lb_func={this.func} key="technology" category="technology" />}/>
        </Routes>
        </Router>
      </> 
    )
  }
} 

// business
// entertainment
// general
// health
// science
// sports
// technology


