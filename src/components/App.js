import React, { Component } from 'react';
// import logo from '../logo.svg';
import Header from './Header/Header.js'
import './App.css';
import FirstPart from './Body/FirstPart.js'
import Main from './Main'
import Footer from './Footer'

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Mr. Sagun's Portfolio"
    };
  }
  render() {
    return (
      <div className="clear-fix container">
        <div className="nav clear-fix">
          <Header/>
        </div>
        <FirstPart />
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
