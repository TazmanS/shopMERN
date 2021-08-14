import React from 'react'
import styled from 'styled-components'
import {SIZE} from '../../helpers/cssVariables'
import { BsArrowDown } from "react-icons/bs"

interface BaseModalInterface {
  setShowModal(): void,
  title: string,
  show: boolean
}

const BaseModal:React.FC<BaseModalInterface> = ({setShowModal, title, children, show }) => {

  return (
    <Container>
      <Title onClick={setShowModal}>
        <div>{title}</div> 
        <Icon as={BsArrowDown} show={show ? show.toString() : undefined} />
      </Title>
      {children}
    </Container>
  )
}

const Container = styled.div `
  position: relative;
`
const Title = styled.div `
  font-size: ${SIZE.size2};
  font-weight: 600;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;
  align-items: center;
  display: flex;
`
const Icon = styled.div<{show: String | undefined}>`
  transition: all 0.3s;
  transform: ${({show}) => show ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export default BaseModal