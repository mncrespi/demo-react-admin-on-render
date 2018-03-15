import React, {Component} from 'react';
import {
  Create,
  LongTextInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest';



export default class PostCreate extends Component {

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
