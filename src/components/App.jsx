import React, { Component } from 'react';

export class App extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
  };

  fetchAllPosts() {}

  render() {
    return (
      <>
        <ul>
          <li>
            <span></span>
            <h3></h3>
            <h4></h4>
            <p></p>
          </li>
        </ul>
      </>
    );
  }
}
