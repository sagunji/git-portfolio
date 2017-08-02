import React, {Component} from 'react';
import * as httpUtil from '../../utils/httpUtil';
import BodyName from "./BodyName";
import StarBorder from "./StarBorder"
import Skills from './skills'

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      userDetails : [],
       frame : "../assets/images/p-frame.png"
    }
  }

  componentWillMount() {
    httpUtil.get('https://api.github.com/users/sagunji').then(response => {
      this.setState({
        userDetails: response.data
      });
    }); 
  }

  componentDidMount() {
     
  }

  render(){
     console.log(this.state.userDetails);

    return(
      <div className="profile">
        <img src={this.state.userDetails.avatar_url}/>
        <div className="frame"></div>
        <BodyName />
        
      </div>
    );
  }
}
export default Profile;