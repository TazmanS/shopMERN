import React from 'react'
import styled from 'styled-components'

const FooterTop = () => {
  return (
    <StyledContainer>
      <div>Присоединяйся к нашим соц. сетям!</div>
      <div>Узнавай о новых акциях!</div>
      <div>Обращайся по любым вопросам!</div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`

export default FooterTop