import React, { Component } from 'react';
import Name from './Name'
import Navigation from './Navigation'

class Header extends Component{
  constructor() {
    super();
    // this.state = {
    //   name: "Mr. Sagun's Portfolio"
    // };
  }
  render() {
    return(
      <div className="nav-center center clear-fix">
        <Name/>
        <Navigation/>
       </div>
    );
  }
}

export default Header;