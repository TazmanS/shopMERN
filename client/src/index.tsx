import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import {IntlProvider} from 'react-intl'
import en from './translations/en.json'
import ru from './translations/ru.json'

const messages = {
  ru,
  en
}

const app = 
  <Provider store={store}>
    <IntlProvider
      messages={messages['en']}
      locale={'ru'}
      key={'ru'}
      onError={(e) => null}
    >
      <App />
    </IntlProvider>
  </Provider>

ReactDOM.render( app, document.getElementById('root'));


