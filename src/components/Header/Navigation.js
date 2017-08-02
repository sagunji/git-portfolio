import React, {Component} from 'react';

class Navigation extends Component{
  constructor(){
    super();
    this.state = {
      navMenus : ['About','Portfolio','Contact'],
      i : 0
    };
  }
  render(){
    return(
      <div className = "navigation">
        <ul>{
          this.state.navMenus.map(menus => {
            return(
              <li key={this.state.i++}>{menus}</li>
              );

          })
        }
        </ul>
      </div>
    );
  }
}

export default Navigation;