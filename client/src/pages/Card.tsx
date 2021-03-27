import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

interface CardInterface {

}

const Card:React.FC<CardInterface> = () => {
  const { id } = useParams<{id: string}>()
  console.log(id)
  return (
    <StyledContainer>
      <div>PHOTO + SLIDER</div><div>BUY BUTTON</div>
      <div>DESCRIPTION</div>
      <div>CHARACTERS</div>
      <div>FEEDBACK</div>
      <div>SLIDER</div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`

export default Card