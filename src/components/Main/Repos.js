import React, { Component } from 'react';

import * as httpUtil from '../../utils/httpUtil';

class Repos extends Component {
  constructor() {
    super();
    this.state = {
      userName: [],
      repos: [],
      Followers: 0,
      Folowing :0,
      searchText: ''
    };
  }

  componentWillMount() {
    // console.log('Ma mount huna lage');
  }

  componentDidMount() {
    //console.log('Ma mount bhae');

    httpUtil.get('https://api.github.com/users/sagunji/repos').then(response => {
      this.setState({
        repos: response.data
      });
    });
  }
  // getName(){
  //   httpUtil.get('https://api.github.com/users/sagunji').then(response => {
  //     this.setState({
  //       userName: response.data
  //     });
  //   });
  // }

  onChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    // console.log(this.state.repos);

    return (
      <div>
      <div className="input-div">
      <label>Search:: </label>
        <input type="text" name="searchText" onChange={this.onChange}  value={this.state.searchText}/>
        </div>
        {
          this.state.repos
          .filter(repo => repo.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) === 0)
          .map(repo => {
            return (
              <div key={repo.id} className="repository">
              <a href={repo.html_url} target="_blank">
              <h2>{repo.name}</h2>
              </a>
              <h3>Created Date: {repo.updated_at}</h3>
              <h3>Language: {repo.language}</h3>
              <h3>Clone URL: {repo.clone_url}</h3>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Repos;