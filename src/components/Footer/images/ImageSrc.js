import React, {Component} from 'react';

class ImageSrc extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <img src={this.props.source}/>
      );
  }
}
export default ImageSrc;