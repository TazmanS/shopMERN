import React from 'react'
import styled from 'styled-components'
import InputDropDown from './InputDropDown'
import { BsArrowDown, BsFillXCircleFill } from "react-icons/bs";



interface BaseModalInterface {
  show: boolean,
  click(): void,
  left?: string
}

const BaseModal:React.FC<BaseModalInterface> = ({show, click, left }) => {

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
    <Div data-show={show} data-left={left}>
      <div className="Modal__title" onClick={click}>
        {currentCity} 
        <BsArrowDown className="arrow"/>
      </div>
      {/* {show &&  */}
      <div className="Modal__body">
        <div className="Modal__BodyTitle">
          Выберите город: 
          <BsFillXCircleFill onClick={click} />
        </div>
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
      {/* } */}
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
  align-items: center;
  display: flex;

  .arrow{
    transition: all 0.3s;
    transform: ${(props: any) => props['data-show'] ? 'rotate(180deg)' : 'rotate(0deg)'}; 
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
  left: ${(props: any) => props['data-left']};
  top: 20px;
  transform: ${(props: any) => props['data-show'] 
    ? 'scale(1) translateX(-50%)' 
    : 'scale(0) translateX(-50%)'};
  padding: 0 15px;
  z-index: 3;
  transition: all 0.3s;
  opacity: ${(props: any) => props['data-show'] ? '1' : '0'};

  .Modal__BodyTitle {
    margin-top: 15px;
    user-select: none;
    width: 100%;
    display: flex;
    justify-content: space-between;

    svg{
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