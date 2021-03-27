// import { ActionType } from '../actions/actionTypes'

const initialState = {
  items: [
    {
      title: 'Blaupunkt 55UN265',
      price: '11000',
      img: '/images/goods1.jpg',
      id: '1',
      rating: '',
      comments: [{}],
      images: [{}],
      description: '',
      characteristics: [{}]
    }
  ]
}

interface State {
  items: Item[]
}

export type Item = {
  title: string,
  price: string,
  img: string,
  id: string,
  rating: string,
  comments: {}[],
  images: {}[],
  description: string,
  characteristics: {}[]
}

// export type Action =
//   | getAllCities;

// interface getAllCities {
//   type: ActionType.GET_ALL_CITIES,
//   payload: []
// }

const goodsReducer = (
  state: State = initialState, 
  action: any): State => {
  switch (action.type) {
    
    default: 
      return {
        ...state
      }
  }
}

export default goodsReducer