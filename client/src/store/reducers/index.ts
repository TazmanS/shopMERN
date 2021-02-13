import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'

const reducers =  combineReducers({
  cities: citiesReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>;