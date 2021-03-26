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
      {id}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`

`

export default Card