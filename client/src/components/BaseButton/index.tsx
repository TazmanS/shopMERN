import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, NUMBER, SIZE} from '../../helpers/cssVariables'

interface ButtonInterface {
  click?(): void
}
// need add styles === color, width, size
const BaseButton:React.FC<ButtonInterface> = ({children, click}) => {
  return (
    <StyledContainer onClick={click}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.button `
  padding: calc(${NUMBER.num1}) calc(${NUMBER.num2});
  border-radius: 5px;
  background-color: ${BG_COLOR.red};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${SIZE.size4};
  cursor: pointer;
`

export default BaseButton