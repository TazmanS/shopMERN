import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import goodsReducer from './goodsReducer'
import categoriesReducer from './categoriesReducer'

const reducers =  combineReducers({
  cities: citiesReducer,
  goods: goodsReducer,
  categories: categoriesReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>;