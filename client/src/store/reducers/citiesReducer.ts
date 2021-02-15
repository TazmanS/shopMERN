import { ActionType } from "../actions/actionTypes"

interface State {
  cities: {
    title: string,
    value: string,
    _id: string
  }[],
  currentCity: string
}

export type Action =
  | getAllCities;

interface getAllCities {
  type: ActionType.GET_ALL_CITIES,
  payload: []
}

const initialState = {
  cities: [],
  currentCity: ''
}

const citiesReducer = (
  state: State = initialState, 
  action: Action) :State => {
    
  switch (action.type) {
    case ActionType.GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload
      }

    default: 
      return state
  }
}

export default citiesReducer