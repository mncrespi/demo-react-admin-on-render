import React, { Component } from 'react';
import './App.css';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { PostList } from './posts';
import { UserList } from './users';

class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />
      </Admin>
    )
  }
}

export default App;
