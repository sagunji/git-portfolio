import React, {Component} from 'react';
import SocialMedia from './SocialMedia';

class Footer extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="footer clear-fix">
        <div className="footer-center center">
          <SocialMedia/>
        </div>
      </div>
    );
  }
}

export default Footer;