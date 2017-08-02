import React, {Component} from 'react';
import * as httpUtil from '../../utils/httpUtil';

class Name extends Component{
  constructor(){
    super();
    this.state = {
      name: "Mr. Sagun's Portfolio",
      userDetails: []
    }
  }

  componentWillMount() {
    httpUtil.get('https://api.github.com/users/sagunji').then(response => {
      this.setState({
        userDetails: response.data
      });
    }); 
  }

  render(){
    return(
        <div className= "name">
        <h2><a href={this.state.userDetails.html_url}>{this.state.name}</a></h2>
        </div>
      );
  }
}

export default Name;