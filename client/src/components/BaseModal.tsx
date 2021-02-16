import React from 'react'
import styled from 'styled-components'
import { BsArrowDown } from "react-icons/bs";

interface BaseModalInterface {
  setShowModal(): void,
  title: string,
  show: boolean
}

const BaseModal:React.FC<BaseModalInterface> = ({setShowModal, title, children, show }) => {

  return (
    <Div data-show={show}>
      <div className="Modal__title" onClick={setShowModal}>
        <div>{title}</div> 
        <BsArrowDown className="arrow"/>
      </div>
      {children}
    </Div>
  )
}

const Div = styled.div `

position: relative;

.Modal__title{
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;
  align-items: center;
  display: flex;

  .arrow{
    transition: all 0.3s;
    transform: ${(props: any) => props['data-show'] ? 'rotate(180deg)' : 'rotate(0deg)'}; 
  }
}




`

export default BaseModal