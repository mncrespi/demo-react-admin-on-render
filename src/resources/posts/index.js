import React, {Component} from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  Filter,
  List,
  LongTextInput,
  ReferenceField,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput
} from 'admin-on-rest';


export class PostList extends Component {
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


class PostTitle extends Component {
  render() {
    return <span>Post {this.props.record ? `"${this.props.record.title}"` : ''}</span>;
  }
}

export class PostEdit extends Component {
  render() {
    return (
      <Edit title={<PostTitle/>} {...this.props}>
        <SimpleForm>
          <DisabledInput source="id"/>
          <ReferenceInput label="User" source="userId" reference="users" validate={required}>
            <SelectInput optionText="name"/>
          </ReferenceInput>
          <TextInput source="title"/>
          <LongTextInput source="body"/>
        </SimpleForm>
      </Edit>
    );
  }
}


export class PostCreate extends Component {
  render() {
    return (
      <Create {...this.props}>
        <SimpleForm>
          <ReferenceInput label="User" source="userId" reference="users" validate={required}>
            <SelectInput optionText="name"/>
          </ReferenceInput>
          <TextInput source="title"/>
          <LongTextInput source="body"/>
        </SimpleForm>
      </Create>
    )
  }
}


export class PostFilter extends Component {
  render() {
    return (
      <Filter {...this.props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name"/>
        </ReferenceInput>
      </Filter>
    )
  }
}
