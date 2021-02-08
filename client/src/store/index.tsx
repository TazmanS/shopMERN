import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducer from './reducers'
import React from 'react'

export const store = createStore(reducer, applyMiddleware(
  reduxThunk
))

interface Store {
  children: React.ReactNode
}

const Store:React.FC<Store> = ({children}) => {
  return( 
    <Provider store={store}>{children}</Provider>
  )
}

export default Store
