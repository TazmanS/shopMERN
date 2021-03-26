import React from 'react'
import styled from 'styled-components'
import {SIZE, BG_COLOR} from '../cssVariables'
import { AiOutlineRight } from "react-icons/ai"

interface ItemInterface {
  mouseEnter(index:number) :void
}

const CatalogItem:React.FC<ItemInterface> = ({mouseEnter}) => {
  return (
    <StyledContainer onMouseEnter={() => mouseEnter(1)}>
      <StyledIcon src="/images/catalog-phones.png" alt="" />
      Text 
      <StyledArrow as={AiOutlineRight} className="arrow"/>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 272px;
  height: 28px;
  display: flex;
  align-items: center;
  font-size: calc(${SIZE.size1} + 1px);
  cursor: pointer;

  :hover{
    width: calc(100% + 1px);
    border-top: 1px solid ${BG_COLOR.light_grey};
    border-bottom: 1px solid ${BG_COLOR.light_grey};
    border-right: 2px solid ${BG_COLOR.white};
    background-color: ${BG_COLOR.white};
    box-shadow: -4px 1px 5px rgb(0 0 0 / 35%);
    box-sizing: border-box;
    font-weight: bold;
    z-index: 2;

    & .arrow {
      margin-right: 4px;
      color: ${BG_COLOR.bg_dark_dark};
    }
  }
`

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`

const StyledArrow = styled.div`
  margin-left: auto;
  margin-right: 5px;

  color: ${BG_COLOR.light_grey};
`

export default CatalogItem