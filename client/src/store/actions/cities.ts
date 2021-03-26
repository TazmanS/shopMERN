import { ActionType } from './actionTypes'
import { Dispatch } from 'redux'
import { Action } from '../reducers/citiesReducer'
import axios from 'axios'

export const getAllCities = () => {
  return async (dispatch:Dispatch<Action>) => {
    try {
      let cities = await axios.get('/api/cities')
      dispatch({
        type: ActionType.GET_ALL_CITIES,
        payload: cities.data
      })

    } catch (error) {
      console.log(error)
    }
  }
}