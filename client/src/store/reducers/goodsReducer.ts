import { ActionType } from '../actions/actionTypes'

const initialState = {
  items: [
    {
      title: 'Blaupunkt 55UN265',
      price: '11000',
      img: '/images/goods1.jpg',
      id: '1',
    },
    {
      title: 'Xiaomi Mi 11 8/256GB Horizon Blue',
      price: '12000',
      img: '/images/goods2.jpg',
      id: '2',
    },
    {
      title: 'Ласерда Д. Вся йога в одной книге ХСА2510181538 (1696340)',
      price: '13000',
      img: '/images/goods3.jpg',
      id: '3',
    },
    {
      title: 'Dell e6430 Pro (203-17025) "Refurbished',
      price: '14000',
      img: '/images/goods4.jpg',
      id: '4',
    },
    {
      title: 'Adronix MT116 2GB RAM Matte Black',
      price: '15000',
      img: '/images/goods5.jpg',
      id: '5',
    },
    {
      title: 'Наушники Monster DiamondZ On-Ear Universal CT Clear White (MNS-137040-00)',
      price: '16000',
      img: '/images/goods6.jpg',
      id: '6',
    },
    {
      title: 'Xiaomi Mi Watch Black',
      price: '170000',
      img: '/images/goods7.jpg',
      id: '7',
    },
    {
      title: 'SmartMi Convector Heater 1 Smart',
      price: '180',
      img: '/images/goods8.jpg',
      id: '8',
    },
    {
      title: 'Массажное кресло Relax HYE-0971 (25070)',
      price: '19000',
      img: '/images/goods9.jpg',
      id: '9',
    },
    {
      title: 'Лодка Ладья ЛТ-250 П с подставкой для удилищ',
      price: '1000000',
      img: '/images/goods10.jpg',
      id: '10',
    },
  ]
}

interface State {
  items: {
    title: string,
    price: string,
    img: string,
    id: string
  }[]
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