import { ActionType } from './actionTypes'
import { Dispatch } from 'redux'
import { Action } from '../reducers/citiesReducer'
import axios from 'axios'

export const getAllCities = () => {
  return async (dispatch:Dispatch<Action>) => {
    try {
      axios.get('/api/cities').then(res => {
        dispatch({
          type: ActionType.GET_ALL_CITIES,
          payload: res.data
        })
      })

    } catch (error) {
      console.log(error)
    }
  }
}