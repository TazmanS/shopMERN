import React from 'react'
import styled from 'styled-components'
import {SIZE, COLOR} from '../cssVariables'

interface InputInterface {
  options: {
    value: string,
    placeholder: string,
    err: boolean,
    errMessage: string
  }
  setValue(event:React.ChangeEvent<HTMLInputElement>): void,
  minWidth?: number
}

const BaseInput:React.FC<InputInterface> = ({options, setValue, minWidth}) => {
  const {value, placeholder, err, errMessage} = options
  return (
    <StyledContainer>
      <StyledTextField 
        minWidth={minWidth}
        value={value} 
        onChange={setValue}
      />
      <StyledMiniPlaceholder value={value} error={err}>
        {err ? errMessage : placeholder}
      </StyledMiniPlaceholder>
    </StyledContainer>
  )
}

const StyledContainer = styled.label`
  position: relative;
`

const StyledTextField = styled.input<{minWidth: Number | undefined}>`
  padding: 15px 10px 10px 10px;
  min-width: ${({ minWidth }) => minWidth ? minWidth + 'px' : '360px'};
  border-radius: 5px;
  margin: 5px;
  font-size: ${SIZE.size2};
  outline: none;

  :focus{
    box-shadow: 0px 0px 10px ${COLOR.main};
  }
`

const StyledMiniPlaceholder = styled.span<{value: String, error: Boolean}>`
  position: absolute;
  top: ${({value}) => value.length > 0 ? '10px' : '23px' };
  left: ${({value}) => value.length > 0 ? '15px' : '20px' };
  font-size: ${({value}) => value.length > 0 ? SIZE.size1 : SIZE.size2 };
  transition: all 0.2s;
  color: ${({error}) => error ? COLOR.error : COLOR.main};
  user-select: none;
`

export default BaseInput