import React from 'react'
import styled from 'styled-components'
import {NUMBER} from '../cssVariables'

interface BaseToggleInterface {
  options?: {title: string, value: string}[],
  check?: boolean,
  change(): void
}

const BaseToggle:React.FC<BaseToggleInterface> = ({options, check = true, change}) => {
  return (
    <StyledContainer>
      {options ? <Option>{options[0].title}</Option> : null}
        <Switch>
          <input type="checkbox" checked={check} onChange={change}/>
          <Slider>
            <Circel check={check ? check.toString() : undefined}/>
          </Slider>
        </Switch>
        {options ? <Option>{options[1].title}</Option> : null}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    display: none;
  }
`

const Option = styled.p `
  margin: 0;
  padding: 0 calc(${NUMBER.num1});
`

const Switch = styled.label`
  width: calc(${NUMBER.num2} + 6px);
  height: calc(${NUMBER.num1});
  display: block;
  position: relative;
  margin-top: calc(${NUMBER.num0} + 3px);
`

const Slider = styled.span`
  background-color: #bdbdbd;
  position: absolute;
  cursor: pointer;
  width: calc(${NUMBER.num2} + 6px);
  height: calc(${NUMBER.num1});
  top: 0;
  left: 0;
  border-radius: 50px;
`

const Circel = styled.span<{check: String | undefined}>`
  width: calc(${NUMBER.num1} + 4px);
  height: calc(${NUMBER.num1} + 4px);
  background-color: #FFFFFF;
  position: absolute;
  top: -2px;
  left: ${({check}) => check ? '-4px' : '16px' };
  border-radius: 50%;
  transition: .4s;
`

export default BaseToggle