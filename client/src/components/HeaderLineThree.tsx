import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, NUMBER} from '../cssVariables'
import Cart from './Cart'
import Catalog from './Catalog'
import NumberDropDown from './NumberDropDown'
import SearchInput from './SearchInput'
import UserBlock from './UserBlock'

const HeaderLineThree = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        <Catalog />
        <NumberDropDown />
        <SearchInput />
        <UserBlock />
        <Cart />
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
  min-height: 49px;
  /* padding: 0 calc(${NUMBER.num1} + 5px); */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default HeaderLineThree