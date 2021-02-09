import React from 'react'
import styled from 'styled-components'

interface BaseToggleInterface {
  color?: string,
  options?: {title: string, value: string}[]
}

const BaseToggle:React.FC<BaseToggleInterface> = ({color = '#2196F3', options}) => {
  return (
    <BaseToggleDiv data-color={color}>
      {options ? <p>{options[0].title}</p> : null}
        <label className="switch" >
          <input type="checkbox" onChange={(e) => console.log(e.target.checked)}/>
          <span className="slider">
            <span className="round"></span>
          </span>
        </label>
        {options ? <p>{options[1].title}</p> : null}
    </BaseToggleDiv>
  )
}

const BaseToggleDiv = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;


.switch{
  width: 26px;
  height: 10px;
  display: block;
  position: relative;
  margin-top: 3px;
}

p{
  margin: 0;
  padding: 0 10px;
}

input {
  width: 0px;
  height: 0px;
  opacity: 0;
}

.switch .slider{
  background-color: #bdbdbd;
  position: absolute;
  width: 26px;
  height: 10px;
  top: 0;
  left: 0;
  border-radius: 50px;
}

.round{
  width: 14px;
  height: 14px;
  background-color: #FFFFFF;
  position: absolute;
  top: -2px;
  left: -4px;
  border-radius: 50%;
  transition: .4s;
}

input:checked + .slider .round {
  left: 16px;
}

`

export default BaseToggle