import React from 'react'
import HeaderLineOne from '../components/HeaderLineOne'
import HeaderLineTwo from '../components/HeaderLineTwo'
import HeaderLineThree from '../components/HeaderLineThree'
import styled from 'styled-components'
import {cssVariables} from '../cssVariables'

const Header = () => {
  return (
    <StyledContainer>
      <HeaderLineOne />
      <HeaderLineTwo />
      <HeaderLineThree />
    </StyledContainer>
  )
} 

const StyledContainer = styled.header `
  width: 100%;
  color: ${cssVariables.textColor1};
`

export default Header