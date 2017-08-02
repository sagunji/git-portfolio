import React, {Component} from 'react';

class ImageSrc extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <a href="#"><img src={this.props.source}/></a>
      );
  }
}
export default ImageSrc;