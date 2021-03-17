import React from 'react'
import styled from 'styled-components'
import {SIZE} from '../cssVariables'
import { AiOutlineUser } from "react-icons/ai"


const UserBlock = () => {
  return (
    <StyledContainer>
      <StyledIcon as={AiOutlineUser} />
      <StyledText>Вход</StyledText>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  padding: 5px 10px;
  cursor: pointer;
`

const StyledIcon = styled.svg `
  font-size: ${SIZE.size4};
`

const StyledText = styled.div `
  font-size: ${SIZE.size1};
`

export default UserBlock