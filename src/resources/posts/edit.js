import React, {Component} from 'react';
import {
  DisabledInput,
  Edit,
  LongTextInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest';


const PostTitle = (props) => (
  <span>Post {props.record ? `"${props.record.title}"` : ''}</span>
)

export default class PostEdit extends Component {

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
