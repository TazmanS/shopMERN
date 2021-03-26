import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import goodsReducer from './goodsReducer'

const reducers =  combineReducers({
  cities: citiesReducer,
  goods: goodsReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>;