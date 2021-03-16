import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, NUMBER} from '../cssVariables'

const HeaderLineThree = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        <div>
          Каталог
        </div>
        <div>
          Номер Выпадашка
        </div>
        <div>
          поиск товара
        </div>
        <div>
          вход
        </div>
        <div>
          Корзина
        </div>
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  width: 100%;
  background-color: ${BG_COLOR.bg_dark_light};
`

const StyledWrap = styled.div`
  max-width: 1170px;
  padding: 0 calc(${NUMBER.num1} + 5px);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

export default HeaderLineThree