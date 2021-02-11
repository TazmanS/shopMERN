import React, { ReactEventHandler } from 'react'
import styled from 'styled-components'
import InputDropDown from './InputDropDown'

interface BaseModalInterface {
  show: boolean,
  click(): void
}

const BaseModal:React.FC<BaseModalInterface> = ({show, click}) => {

  const cities = [
    {
      title: 'Киев',
      value: 'kiev',
      id: 1
    },
    {
      title: 'Одесса',
      value: 'odessa',
      id: 2
    },
    {
      title: 'Николаев',
      value: 'nikolaev',
      id: 3
    },
    {
      title: 'Харьков',
      value: 'kharkov',
      id: 4
    },
    {
      title: 'Запорожье',
      value: 'zaporojie',
      id: 5
    },
    {
      title: 'Львов',
      value: 'lviv',
      id: 6
    },
    {
      title: 'Суммы',
      value: 'symmi',
      id: 7
    },
    {
      title: 'Херсон',
      value: 'kherson',
      id: 8
    },
    {
      title: 'Виница',
      value: 'vinnica',
      id: 9
    },
    {
      title: 'Днепр',
      value: 'dnepr',
      id: 10
    },
  ]

  const [currentCity, setCurrentCity] = React.useState('Николаев')
  const [search, setSearch] = React.useState('')
  // const [cities, setSities] = React.useState([
  //   {
  //     title: 'Киев',
  //     value: 'kiev',
  //     id: 1
  //   },
  //   {
  //     title: 'Одесса',
  //     value: 'odessa',
  //     id: 2
  //   },
  //   {
  //     title: 'Николаев',
  //     value: 'nikolaev',
  //     id: 3
  //   },
  //   {
  //     title: 'Харьков',
  //     value: 'kharkov',
  //     id: 4
  //   },
  //   {
  //     title: 'Запорожье',
  //     value: 'zaporojie',
  //     id: 5
  //   },
  //   {
  //     title: 'Львов',
  //     value: 'lviv',
  //     id: 6
  //   },
  //   {
  //     title: 'Суммы',
  //     value: 'symmi',
  //     id: 7
  //   },
  //   {
  //     title: 'Херсон',
  //     value: 'kherson',
  //     id: 8
  //   },
  //   {
  //     title: 'Виница',
  //     value: 'vinnica',
  //     id: 9
  //   },
  //   {
  //     title: 'Днепр',
  //     value: 'dnepr',
  //     id: 10
  //   },
  // ])

  const citiesNode = cities.concat().splice(0, 6).map(city => {
    return (
      <div 
        key={city.id} 
        onClick={() => {
          setCurrentCity(city.title)
          click()
        }} 
      >{city.title}</div>
    )
  })

  return (
    <Div>
      <div className="Modal__title" onClick={click}>{currentCity} <span>Down</span></div>
      {show && 
      <div className="Modal__body">
        <div className="Modal__BodyTitle">Выберите город: <span onClick={click}>X</span></div>
        <div className="Modal__city">
          {citiesNode}
        </div>
        <div className="Modal__search">
          <InputDropDown 
            cities={cities} 
            search={search} 
            change={(event:React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
          />
        </div>
      </div>
      }
    </Div>
  )
}

const Div = styled.div `

position: relative;

.Modal__title{
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;

  & span{
    font-weight: normal;
  }
}

.Modal__body{
  width: 260px;
  height: 213px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  padding: 0 15px;

  .Modal__BodyTitle {
    margin-top: 15px;
    user-select: none;

    span{
      cursor: pointer;
    }
  }

  .Modal__city{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    div{
      padding: 5px;
      color: #3131f3;
      cursor: pointer;
    }

    div:hover{
      background-color: #f1f1f1;
    }
  }

  .Modal__search{
    margin-bottom: 15px;
  }
}


`

export default BaseModal