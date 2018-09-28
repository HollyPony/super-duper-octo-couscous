import React, { Component } from 'react';
import { UISref, UISrefActive } from '@uirouter/react';

export default class extends Component {
  render() {
    return (
      <div>
        Home
        <UISrefActive class="active">
          <UISref to="app.truc"><a>Hello</a></UISref>
        </UISrefActive>
      </div>
    );
  }
}
