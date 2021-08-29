import React, {useEffect} from 'react'
import Routes from './routes'
import { useDispatch } from 'react-redux'
import { getAllCities } from './store/actions/cities'
import { getAllCategories } from './store/actions/categories'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCities())
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
