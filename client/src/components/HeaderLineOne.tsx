import React from 'react'
import styled from 'styled-components'
import BaseModal from './BaseModal'
import BaseToggle from './BaseToggle'
import { useDispatch } from 'react-redux'
import { getAllCities } from '../store/actions/cities'

const HeaderLineOne = () => {
  const dispatch = useDispatch()

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

  const [show, setShow] = React.useState(false)

  return (
    <Div>
      <button onClick={dispatch(getAllCities)}>11</button>
      <BaseModal 
        show={show} 
        left={'150px'}
        click={() => setShow(!show)} 
      />
      <BaseToggle options={optionsOne} />
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
      <BaseToggle options={optionsTwo} />
    </Div>
  )
}

const Div = styled.div `
  display: flex;
  justify-content: space-around;

  & ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;

    & li {
      list-style-type: none;
    }
  }

`

export default HeaderLineOne