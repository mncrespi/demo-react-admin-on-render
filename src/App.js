import React, { Component } from 'react';
import './App.css';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { PostList, PostCreate, PostEdit } from './posts';
import { UserList } from './users';

class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
        <Resource name="users" list={UserList} />
      </Admin>
    )
  }
}

export default App;
