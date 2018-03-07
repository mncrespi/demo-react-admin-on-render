import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Dashboard extends Component {
  render() {
    return (
      <Card style={{margin: '2em'}}>
        <CardHeader title="Test React Admin On Render"/>
        <CardText>Welcome to the administration Dashboard, Lorem ipsum sic dolor amet...</CardText>
      </Card>
    );
  }
}
