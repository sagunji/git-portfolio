import React, {Component} from 'react';

class StartBorder extends Component{

  constructor(){
    super();
  }

  render(){
    console.log("hello"+this.props.id);
    return (<div className= "star-bdr">
        <img src={this.props.id}/>
    </div>);
  }
}

export default StartBorder;