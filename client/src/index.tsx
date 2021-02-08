import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store'

const app = 
  <Store>
    <App />
  </Store>

ReactDOM.render( app, document.getElementById('root'));


