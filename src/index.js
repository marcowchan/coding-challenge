import React from 'react';
import ReactDOM from 'react-dom';
import { message } from './app.js';

ReactDOM.render(
  <h1>{ message }</h1>,
  document.getElementById('app')
);