import React from 'react'
import styled from "styled-components";

const HeaderLineTwo = () => {
  return (
    <Div>
      <div>LOGO</div>
      <div>
        <ul>
          <li>Живи Смарт</li>
          <li>Деньги</li>
          <li>Апгрейд</li>
          <li>Обмен</li>
          <li>Уценка</li>
          <li>Акции</li>
        </ul>
      </div>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;

  & ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;

    & li {
      list-style-type: none;
    }
  }

`

export default HeaderLineTwo