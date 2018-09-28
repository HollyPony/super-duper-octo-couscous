import React, { Component } from 'react';
import { UIView, UISref, UISrefActive } from '@uirouter/react';

export default class extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <UISrefActive class="active">
            <UISref to="app.home"><a>Home</a></UISref>
          </UISrefActive>

          <UISrefActive class="active">
            <UISref to="app.truc"><a>Truc</a></UISref>
          </UISrefActive>
        </header>

        <UIView />
      </div>
    );
  }
}
