import React from 'react'
import styled from 'styled-components'
import {SIZE, NUMBER} from '../cssVariables'
import { AiOutlineShoppingCart } from "react-icons/ai"
import {currency} from '../helpers/index'
import BaseButton from './BaseButton'
import {Link} from 'react-router-dom'
 

import {Item as ItemType} from '../store/reducers/goodsReducer'
interface CardInterface {
  item: ItemType
}

const Card:React.FC<CardInterface> = ({item}) => {
  const {title, price, img, id} = item

  return (
    <StyledContainer>
      <Link to={`/product/${id}`}>
        <StyledImg src={img} alt={title} />
      </Link>
      <StyledTitle>
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </StyledTitle>
      <StyledInfo>
        <StyledCurrency>
          {currency(Number(price))}
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
  justify-content: space-between;
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