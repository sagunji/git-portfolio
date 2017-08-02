import React, {Component} from 'react';
// import images from './images'
// import icons from '../../assets/images';
import icons1 from '../../assets/images/icon-facebook-white.png';
import icons2 from '../../assets/images/icon-instagram-white.png';
import icons3 from '../../assets/images/icon-pinterest-white.png';
import icons4 from '../../assets/images/icon-twitter-white.png';
import icons5 from '../../assets/images/icon-youtube-white.png';
import ImageSrc from './ImageSrc'

class SocialMedia extends Component{
  constructor(){
    super();
    this.state ={
      imgSrcs:[],
      i : 0
    }
    // this.placeImages();
  }
  placeImages = () => {
    // {require({'../../assets/images/icon-facebook-white.png'})}
    // this.state.imgSrcs.push();
    /*this.state.imgSrcs.push('./images/icon-instagram-white.png');
    this.state.imgSrcs.push('./images/icon-pinterest-white.png');
    this.state.imgSrcs.push('./images/icon-twitter-white.png');
    this.state.imgSrcs.push('./images/icon-youtube-white.png');*/
    let imgArr = [icons1,icons2,icons3,icons4,icons5];
    console.log(imgArr);
    this.setState({
      imgSrcs: this.state.imgSrcs.concat(imgArr)
    })
    // console.log("Watch this");

    // console.log(this.state.imgSrcs);
  }
  // {require({'../../assets/images/icon-instagram-white.png'})}
  componentDidMount() {
    this.placeImages();

  }
  render(){
    return(
      <div className="social-media">
        <ul>
          {
          this.state.imgSrcs && this.state.imgSrcs.map(src => {
            return(
              <li key={this.state.i++}><ImageSrc source = {src}/></li>
              );

          })
        }
        </ul>
      </div>
    );
  }
}
export default SocialMedia;