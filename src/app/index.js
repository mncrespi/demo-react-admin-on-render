import React, { Component } from 'react';
import './index.css';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { PostIcon, PostList, PostCreate, PostEdit } from '../resources/posts';
import { UserIcon, UserList, UserCreate, UserEdit, } from '../resources/users';
import Dashboard from '../resources/dashboard'
import authClient from '../resources/auth'

export default class App extends Component {
  render() {
    return (
      <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
        <Resource name="users" icon={UserIcon} list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} />
      </Admin>
    )
  }
}
