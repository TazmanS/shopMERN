import React from 'react'
import styled from "styled-components";
import {BG_COLOR, NUMBER, SIZE} from '../cssVariables'
import { Link } from 'react-router-dom'

const HeaderLineTwo = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        <Link to="/">
          <StyledLogo src='/reactLogo.png' alt="Logo" />
        </Link>
        <StyledList>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image1.png" alt="" />
              Живи Смарт
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image2.png" alt="" />
              Деньги
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image3.png" alt="" />
              Апгрейд
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image4.png" alt="" />
              Обмен
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image5.png" alt="" />
              Уценка
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">
              <img src="/images/hl2-image6.png" alt="" />
              Акции
            </Link>
          </StyledListItem>
        </StyledList>
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: ${BG_COLOR.bg_dark_dark};
  width: 100%;
`

const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(${NUMBER.num1} + 5px);
  margin: 0 auto;
  max-width: 1170px;
`

const StyledLogo = styled.img `
  width: 152px;
  height: 76px;
`

const StyledList = styled.ul `
  font-size: calc(${SIZE.size1} + 1px);
  display: grid;
  grid-auto-flow: column;
  grid-gap: calc(${NUMBER.num2} + 5px);
`

const StyledListItem = styled.li `
  & a {
    display: flex;
    align-items: center;
  }
  
  & img {
    margin-right: 5px;
  }
`

export default HeaderLineTwo