import React, {Component} from 'react';
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  EditButton,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'admin-on-rest';


const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="Name" source="id" reference="users">
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export default class UserList extends Component {

  render() {
    return (
      <List title="All users" {...this.props} filters={<PostFilter/>}>
        <Datagrid>
          <TextField source="id"/>
          <TextField source="name"/>
          <TextField source="username"/>
          <EmailField source="email"/>
          <EditButton/>
        </Datagrid>
      </List>
    )
  }
}
