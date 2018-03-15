import React, {Component,} from 'react'
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from 'admin-on-rest'


const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users">
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export default class PostList extends Component {

  render() {
    return (
      <List {...this.props} filters={<PostFilter/>}>
        <Datagrid>
          <TextField source="id"/>
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name"/>
          </ReferenceField>
          <TextField source="title"/>
          <TextField source="body"/>
          <EditButton/>
        </Datagrid>
      </List>
    )
  }

}
