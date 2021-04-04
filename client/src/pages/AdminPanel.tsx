import React, { useState } from 'react'
import styled from 'styled-components'
import {addCategory} from '../store/actions/categories'
import {useDispatch} from 'react-redux'
import BaseInput from '../components/BaseInput'
import BaseButton from '../components/BaseButton'

const AdminPanel = () => {
  const dispatch = useDispatch()

  const [titleOptions, setTitleOptions] = useState({
    value: '',
    placeholder: 'Введите название категории',
    err: false,
    errMessage: 'Какие-то проблемы с названием категории'
  })
  const [subCategory, setSubCategory] = useState([{}, {}])
  const [categoryImg, setCategoryImg] = useState('')

  function setParam(obj: any, options: any) {
    let a = Object.assign({}, obj)
    for (let key in options) {
      a[key] = options[key]
    }
    return a
  }

  const setTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitleOptions( setParam(titleOptions, {value: event.target.value}) )
  }

  return (
    <StyledContainer>
      <StyledCategory>
        <BaseInput 
          options={titleOptions}
          setValue={setTitle}
        />
        <BaseButton click={() => dispatch(addCategory())}>
          ADD
        </BaseButton>
      </StyledCategory>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`

const StyledCategory = styled.div`

`

export default AdminPanel