import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'
import React from 'react'

export const store = createStore(reducers, applyMiddleware(
  reduxThunk
))

interface StoreInterface {
  children: React.ReactNode
}

const Store:React.FC<StoreInterface> = ({children}) => {
  return( 
    <Provider store={store}>{children}</Provider>
  )
}

export default Store
