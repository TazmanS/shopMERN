import React from 'react'
import styled from 'styled-components'

const HeaderLineOne = () => {
  return (
    <Div>
      <div>
        Выпадашка
      </div>
      <div>переключатель</div>
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
      <div>переключатель</div>
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