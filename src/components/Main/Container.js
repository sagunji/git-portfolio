import React, {Component} from 'react';
import Repos from './Repos'
import Portfolio from './Portfolio'

class Container extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="main center clear-fix">
        <Portfolio/>
        <Repos/>
      </div>
      );
  }
}

export default Container;