import React from 'react'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import { RegisterForm } from './forms';

function App() {

  return (
    <BrowserRouter>
      <Routes />

      <RegisterForm />
    </BrowserRouter>
  );
}

export default App;
