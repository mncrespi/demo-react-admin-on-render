import React, {Component} from 'react';
import {Datagrid, EmailField, List, TextField} from 'admin-on-rest';


export class UserList extends Component {

  render() {
    return (
      <List title="All users" {...this.props}>
        <Datagrid>
          <TextField source="id"/>
          <TextField source="name"/>
          <TextField source="username"/>
          <EmailField source="email"/>
        </Datagrid>
      </List>
    )
  }
}

