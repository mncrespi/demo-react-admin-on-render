import React, { Component } from 'react';
import './App.css';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { PostList } from './posts';

class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} />
      </Admin>
    )
  }
}

export default App;
