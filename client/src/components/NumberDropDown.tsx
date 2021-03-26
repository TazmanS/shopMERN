import React, {useState} from 'react'
import styled from 'styled-components'
import {BG_COLOR, COLOR, SIZE} from '../cssVariables'

const NumberDropDown = () => {
  const [show, setShow] = useState(false)

  const mouseEnter = () => {
    setShow(true)
  }

  const mouseLeave = () => {
    setShow(false)
  }

  return (
    <StyledContainer 
      onMouseEnter={mouseEnter} 
      onMouseLeave={mouseLeave}
    >
      0 800 300 100
      {show 
      ?
      <StyledDropBody>
        <StyledFreeNumber>
          <div className="title">Бесплатные</div>
          <div className="numbers">
            <div className="number__item">0 800 300 100</div>
            <div className="number__item">0 800 300 100</div>
          </div>
        </StyledFreeNumber>
        <StyledFreeNumber>
        <div className="title">Согласно тарифа отператора</div>
          <div className="numbers">
            <div className="number__item">0 800 300 100</div>
            <div className="number__item">0 800 300 100</div>
          </div>
        </StyledFreeNumber>
        <div className="text">*Звонки со стационарных телефонов, а также мобильных операторов Киевстар, Vodafone и Life, бесплатны по всей Украине.</div>
      </StyledDropBody>
      : null}
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 10px 0;
`

const StyledDropBody = styled.div`
  position: absolute;
  background-color: ${BG_COLOR.white};
  width: 200%;
  color: ${COLOR.main};
  padding: 20px;
  top: 35px;
  box-shadow: -1px -1px 10px rgb(0 0 0 / 35%);
  border-radius: 5px;

  .text {
    font-size: calc(${SIZE.size0} + 2px);
  }
`

const StyledFreeNumber = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${SIZE.size1};
  margin-bottom: 10px;

  .title{
    align-self: flex-start;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  .numbers{
    align-self: flex-end;
  }
` 


export default NumberDropDown