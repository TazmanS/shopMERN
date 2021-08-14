import React from 'react'
import {NUMBER} from '../../helpers/cssVariables'
import styled from 'styled-components'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const HomePage = () => {

  const { items } = useTypedSelector(store => store.goods)

  return (
    <StyledContainer>
      <StyledWrap>

      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  margin: calc(${NUMBER.num2} + 5px) 0;
  width: 100%;
`

const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(${NUMBER.num1} + 5px);
  justify-content: center;
  padding: 0 calc(${NUMBER.num1} + 5px);
  margin: 0 auto;
  max-width: 1170px;
`

export default HomePage