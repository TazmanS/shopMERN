import React from 'react'
import styled from 'styled-components'
import {COLOR, BG_COLOR} from '../cssVariables'
import { AiOutlineSearch } from "react-icons/ai"


const SearchInput = () => {
  return (
    <StyledContainer>
      <StyledTextField placeholder="Поиск товаров" />
      <StyledIcon as={AiOutlineSearch} />
    </StyledContainer>
  )
}

const StyledContainer = styled.label`
  width: 410px;
  height: 36px;
  padding: 0 20px;
  background-color: ${BG_COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`

const StyledTextField = styled.input `
  width: 80%;
  outline: none;
  border: none;
  flex: 1 1 auto;
  padding-right: 20px;
`

const StyledIcon = styled.svg `
  color: ${COLOR.main};
  cursor: pointer;
`

export default SearchInput