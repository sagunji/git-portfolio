import React, {Component} from 'react';
import * as httpUtil from '../../utils/httpUtil';

class BodyName extends Component{
  constructor(){
    super();
    this.state ={
      userDetails : []
    }
  }

  componentWillMount(){
    httpUtil.get('https://api.github.com/users/sagunji').then(response => {
      this.setState({
        userDetails: response.data
      });
    });
  }
  render(){
    return(
      <div className="body-name">
        <h2>{this.state.userDetails.login}</h2>
        <h3>{this.state.userDetails.bio}</h3>
      </div>
      );
  }
}

export default BodyName;