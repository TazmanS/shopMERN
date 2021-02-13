// import { ActionType } from './actionTypes'
import { Dispatch } from 'redux'
import { Action } from '../reducers/citiesReducer'
import axios from 'axios'

export const getAllCities = () => {
  return async (dispatch:Dispatch<Action>) => {
    let options = {
      title: '',
      value: ''
    }

    axios.post('/api/cities', options)
    
  }
}