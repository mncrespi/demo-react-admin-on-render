import React, { Component } from 'react';
import './index.css';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { PostIcon, PostList, PostCreate, PostEdit } from '../resources/posts';
import { UserList } from '../resources/users';
import UserIcon from 'material-ui/svg-icons/social/group';
import Dashboard from '../resources/dashboard'
import authClient from '../resources/auth'

export default class App extends Component {
  render() {
    return (
      <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
        <Resource name="users" icon={UserIcon} list={UserList} />
      </Admin>
    )
  }
}
