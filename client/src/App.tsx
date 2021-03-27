import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {SIZE, COLOR} from './cssVariables'
import styled from 'styled-components'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'

import { useDispatch } from 'react-redux'
import { getAllCities } from './store/actions/cities'
import { getAllCategories } from './store/actions/categories'
import Card from './pages/Card'
import AdminPanel from './pages/AdminPanel'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCities())
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <BrowserRouter>
      <StyledContainer>
        <Header />
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/product/:id'} component={Card} />
          <Route path={'/admin'} component={AdminPanel} />
        </Switch>
        <Footer />
      </StyledContainer>  
    </BrowserRouter>
  );
}

const StyledContainer = styled.div `
  width: 100%;
  color: ${COLOR.main};
  font-size: ${SIZE.size2};
`

export default App;
