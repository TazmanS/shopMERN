import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <Header />
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
        <Footer />
      </StyledContainer>  
    </BrowserRouter>
  );
}

const StyledContainer = styled.div `
  width: 100%;
`

export default App;
