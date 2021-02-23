import React from 'react'
import styled from 'styled-components'
import {cssVariables} from '../cssVariables'

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
  background-color: ${cssVariables.bgColor1};
`

const StyledWrap = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

export default HeaderLineThree