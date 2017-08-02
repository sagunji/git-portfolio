import React, {Component} from 'react';
import StarBorder from '../Body/StarBorder';

import Star from '../../assets/images/star-bdr-black.png';
// import logo from './logo.svg';

class Portfolio extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="portfolio">
        <h2>Portfolio</h2>
        <StarBorder id = {Star}/>
      </div>
    );
  }
}

export default Portfolio;