import React, {useEffect} from 'react'
import Routes from './routes'
import { useDispatch } from 'react-redux'
import { getAllCities } from './store/actions/cities'
import { getAllCategories } from './store/actions/categories'
import {BrowserRouter} from 'react-router-dom'
import { MainWrapper } from './sections'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCities())
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
