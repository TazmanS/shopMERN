import { ActionType } from './actionTypes'
import { Dispatch } from 'redux'
import { Action, Category } from '../reducers/categoriesReducer'
import axios from 'axios'

export const getAllCategories = () => {
  return async (dispatch:Dispatch<Action>) => {
    try {
      let response = await axios.get('/api/categories')

      // console.log(response)

    } catch (e) {
      console.log(e)
    }
  }
}
//category: Category
export const addCategory = () => {
  return async (dispatch:Dispatch<Action>) => {
    try {
      let response = await axios.post('/api/categories/add', {
        title: 'title',
        img: 'img',
        subCategories: [
          {
            title: 'subTitle',
            url: 'subUrl'
          }
        ]
      })

      console.log(response)

    } catch (e) {
      console.log(e)
    }
  }
}