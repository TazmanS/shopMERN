import React from 'react'
import styled from 'styled-components'
import {SIZE, NUMBER} from '../cssVariables'
import { AiOutlineShoppingCart } from "react-icons/ai"
import {currency} from '../helpers/index'
import BaseButton from './BaseButton'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <StyledContainer>
      <Link to="/">
        <StyledImg src="images/cardImg.jpg" alt="" />
      </Link>
      <StyledTitle>
        <Link to="/">
          Xiaomi Mi 11 8/256GB Horizon Blue
        </Link>
      </StyledTitle>
      <StyledInfo>
        <StyledCurrency>
          {currency(10000)}
        </StyledCurrency>
        <BaseButton>
          <AiOutlineShoppingCart />
        </BaseButton>
      </StyledInfo>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  max-width: 305px;
  max-height: 450px;
  padding: calc(${NUMBER.num3}) calc(${NUMBER.num1});
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgb(0 0 0 / 7%);

  &:hover{
    box-shadow: -1px -1px 10px rgb(0 0 0 / 35%);
  }
`

const StyledImg = styled.img `
  width: 100%;
`

const StyledTitle = styled.div `
  font-size: calc(${SIZE.size3} + 2px);
  padding: 0 calc(${NUMBER.num1});
  margin: calc(${NUMBER.num1} + 5px) 0;
  text-align: center;
`

const StyledInfo = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledCurrency = styled.div `
  font-weight: 600;
  font-size: ${SIZE.size4};
`

export default Card