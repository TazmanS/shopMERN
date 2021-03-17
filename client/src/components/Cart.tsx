import React from 'react'
import styled from 'styled-components'
import {SIZE, BG_COLOR, COLOR} from '../cssVariables'
import { AiOutlineShoppingCart } from "react-icons/ai"


const Cart = () => {
	return (
		<StyledContainer>
			<StyledRound>0</StyledRound>
			<StyledIcon as={AiOutlineShoppingCart} />
			<StyledText>Корзина пуста</StyledText>
		</StyledContainer>
	)
}

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: min-content;
	gap: 10px;
	cursor: pointer;
	user-select: none;
	position: relative;
	padding: 0px 10px;
	height: 100%;
`

const StyledText = styled.div `
	font-size: ${SIZE.size1};
`

const StyledIcon = styled.svg`
	font-size: ${SIZE.size5};
`

const StyledRound = styled.div`
	min-width: 12px;
	min-height: 12px;
	text-align: center;
	font-size: ${SIZE.size1};
	position: absolute;
	z-index: 3;
	top: 3px;
	left: 25px;
	border-radius: 50%;
	background-color: ${BG_COLOR.red};
	border: 1px solid ${COLOR.white};
	padding: 1px;
`

export default Cart