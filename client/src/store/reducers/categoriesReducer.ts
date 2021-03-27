import { ActionType } from '../actions/actionTypes'

const initialState = {
  categories: [
    {
      title: 'title',
      img: 'img',
      subCategories: [
        {
          title: 'subTitle',
          url: 'subUrl'
        }
      ]
    }
  ]
}

interface State {
  categories: Category[]
}

export type Category = {
  title: string,
  img: string,
  subCategories: {
    title: string,
    url: string
  }[],
}

export type Action =
  | getAllCategories;

interface getAllCategories {
  type: ActionType.GET_ALL_CATEGORIES,
  payload: []
}

const categoriesReducer = (
  state: State = initialState, 
  action: Action): State => {
  switch (action.type) {
    
    default: 
      return {
        ...state
      }
  }
}

export default categoriesReducer