import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fortune: "Awaiting your orders..."
    }
  }

fetchData() {
  axios.get('/data').then(res => {
    this.setState({
      fortune: res.data
    })
  })
}


  render() {
    return (
      <div className="App">
       <h1>tell me my fortune </h1>
       <button onClick={() => this.fetchData()}>Fetch fortune</button>
       <p>{this.state.fortune}</p>
      </div>
    );
  }
}

export default App;
