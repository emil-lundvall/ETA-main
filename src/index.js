import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import App from './App';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

$(function(){
  $.scrollIt();
});