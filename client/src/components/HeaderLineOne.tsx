import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, SIZE, NUMBER} from '../cssVariables'
import BaseToggle from './BaseToggle'

import GeoDropDown from './GeoDropDown'

const HeaderLineOne:React.FC = () => {

  const optionsOne = [
    {
      title: 'Светлая',
      value: 'light'
    },
    {
      title: 'Тёмная',
      value: 'dark'
    }
  ]

  const optionsTwo = [
    {
      title: 'RU',
      value: 'ru'
    },
    {
      title: 'UA',
      value: 'ua'
    }
  ]
  
  const [checkOne, setCheckOne] = React.useState(true)
  const [checkTwo, setCheckTwo] = React.useState(false)

  return (
    <StyledContainer>
      <StyledWrap>
        <GeoDropDown />
        <BaseToggle 
          options={optionsOne} 
          check={checkOne} 
          change={() => setCheckOne(!checkOne)} 
        />
        <ul>
          <li>Блог</li>
          <li>Fishka</li>
          <li>Вакансии</li>
          <li>Магазины</li>
          <li>Доставка и оплата</li>
          <li>Кредит</li>
          <li>Гарантия / Возврат</li>
          <li>Контакты</li>
        </ul>
        <BaseToggle 
          options={optionsTwo} 
          check={checkTwo}
          change={() => setCheckTwo(!checkTwo)} 
        />
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  width: 100%;
  background-color: ${BG_COLOR.bg_dark_light};

  & ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: calc(${NUMBER.num1});

    & li {
      list-style-type: none;
      font-size: calc(${SIZE.size1} + 2px);
    }
  }
`

const StyledWrap = styled.div`
  max-width: 1170px;
  padding: calc(${NUMBER.num0} + 5px) calc(${NUMBER.num1} + 5px);
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default HeaderLineOne