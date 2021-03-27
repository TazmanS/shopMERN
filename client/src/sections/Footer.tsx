import React from 'react'
import {NUMBER} from '../cssVariables'
import styled from 'styled-components'
import FooterTop from '../components/FooterTop'
import FooterBottom from '../components/FooterBottom'

const Footer = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        <FooterTop />
        <FooterBottom />
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.footer `
  width: 100%;
  margin-top: ${NUMBER.num5};
`

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export default Footer