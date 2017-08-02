import React, {Component} from 'react';
import Profile from './Profile'
import Skills from './skills'
import StarBorder from './StarBorder'
import Star from '../../assets/images/star-bdr.png';

class FirstPart extends Component{
  constructor(){
    super();

  }


  render(){
    return(
      <div className="body-part">
        <div className= "body-center center">
          <Profile />
          <StarBorder id = {Star}/>
        <Skills/>

        </div>
      </div>
      );
  }
}

export default FirstPart;