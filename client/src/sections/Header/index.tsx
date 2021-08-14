import React from 'react'
// import HeaderLineOne from '../components/HeaderLineOne'
import {HeaderLineTwo, HeaderLineThree} from './components'
import styled from 'styled-components'
import {COLOR} from '../../helpers/cssVariables'

const Header = () => {
  return (
    <StyledContainer>
      {/* <HeaderLineOne /> */}
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