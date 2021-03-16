import React from 'react'
import HeaderLineOne from '../components/HeaderLineOne'
import HeaderLineTwo from '../components/HeaderLineTwo'
import HeaderLineThree from '../components/HeaderLineThree'
import styled from 'styled-components'
import {COLOR} from '../cssVariables'

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
  color: ${COLOR.white};
`

export default Header