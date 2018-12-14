import React, { Component } from 'react';
import Jumbotron from "./component/jumbotron";
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <div className="container">
        <li>
        <img className="click-item"  src="../public/1_RkOd8UkCzVUCxNRomdLsYw.jpeg" width="40" height="40" alt=""></img>
        </li>
      </div> */}
      <Jumbotron div ></Jumbotron>
       
        </header>
      </div>
    );
  }
}

export default App;
