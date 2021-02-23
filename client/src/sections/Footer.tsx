import React from 'react'
import styled from 'styled-components'
import FooterTop from '../components/FooterTop'
import FooterBottom from '../components/FooterBottom'

const Footer = () => {
  return (
    <StyledContainer>
      <FooterTop />
      <FooterBottom />
    </StyledContainer>
  )
}

const StyledContainer = styled.footer `
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default Footer