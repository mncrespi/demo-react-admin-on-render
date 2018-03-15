import React, {Component} from 'react';
import {
  DisabledInput,
  Edit,
  SimpleForm,
  TextInput
} from 'admin-on-rest';


const Title = (props) => (
  <span>User {props.record ? `"${props.record.name}"` : ''}</span>
)


export default class PostEdit extends Component {

  render() {
    return (
      <Edit title={<Title/>} {...this.props}>
        <SimpleForm>
          <DisabledInput source="id"/>
          <TextInput label="Name" source="name"/>
          <TextInput label="Email" source="email"/>
          <TextInput label="Phone" source="phone"/>
          <TextInput label="WebSite" source="website"/>

          <b style={{marginTop: '20px', marginBottom: 0, }} >Addres:</b>
          <TextInput label="Street" source="address.street"/>
          <TextInput label="Suite" source="address.suite"/>
          <TextInput label="City" source="address.city"/>
          <TextInput label="ZipCode" source="address.zipcode"/>

          <b style={{marginTop: '20px', marginBottom: 0, }} >Company:</b>
          <TextInput label="Name" source="company.name"/>
          <TextInput label="CatchPhrase" source="company.catchPhrase"/>
          <TextInput label="BS" source="company.bs"/>
        </SimpleForm>
      </Edit>
    );
  }

}
