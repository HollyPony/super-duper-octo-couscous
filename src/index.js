import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import App from './App';
import Home from './Home';
import Truc from './Truc';

const states = [
  {
    name: 'app',
    url: '',
    component: App,
  },
  {
    name: 'app.home',
    url: '/',
    component: Home
  },
  {
    name: 'app.truc',
    url: '/truc',
    component: Truc
  }
]

const plugins = [pushStateLocationPlugin];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView />
  </UIRouter>
  ,
  document.getElementById('root')
)
