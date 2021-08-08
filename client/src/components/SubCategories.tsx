import React, {useState} from 'react'
import styled from 'styled-components'
import {SIZE} from '../cssVariables'
import BaseInput from './BaseInput'
import {setParam} from '../helpers/index'
import BaseButton from './BaseButton'

const SubCategories = () => {

  const [title, setTitle] = useState({
    value: '',
    placeholder: 'Введите URLimg категории',
    err: false,
    errMessage: 'Какие-то проблемы с  URLimg категории'
  })

  const setTitleFunction = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle( setParam(title, {value: event.target.value}) )
  }

  return (
    <StyledContainer>
      <BaseInput 
        options={title}
        setValue={setTitleFunction}
        minWidth={270}
      />
      <BaseButton>
        Add
      </BaseButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`

export default SubCategories