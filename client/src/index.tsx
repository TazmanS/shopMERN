import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store'
import {IntlProvider} from 'react-intl'
import en from './translations/en.json'
import ru from './translations/ru.json'

const messages = {
  ru,
  en
}

const app = 
  <Store>
    <IntlProvider
      messages={messages['ru']}
      locale={'ru'}
      key={'ru'}
      onError={(e) => null}
    >
      <App />
    </IntlProvider>
  </Store>

ReactDOM.render( app, document.getElementById('root'));


