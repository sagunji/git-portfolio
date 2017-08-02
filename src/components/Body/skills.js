import React, {Component} from 'react';
// import 

class Skills extends Component{
  constructor(){
    super();
    this.state ={
      skillSet: ['JavaScript', 'C# Technologies', 'PHP frameworks', 'Java'],
      i :0
    }
  }
  render(){
    return(
      <div className = "skills">
        <ul>{
          this.state.skillSet.map(skill =>{
            return(
              <li key={this.state.i++}>{skill}</li>

              );
          })
        }
        </ul>
      </div>    
      );
  }
}
export default Skills;


