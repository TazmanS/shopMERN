import React, { useState } from 'react'
import styled from 'styled-components'
import {addCategory} from '../store/actions/categories'
import {useDispatch} from 'react-redux'
import BaseInput from '../components/BaseInput'
import BaseButton from '../components/BaseButton'
import {setParam} from '../helpers/index'
import SubCategories from '../components/SubCategories'

const AdminPanel = () => {
  const dispatch = useDispatch()

  const [titleOptions, setTitleOptions] = useState({
    value: '',
    placeholder: 'Введите название категории',
    err: false,
    errMessage: 'Какие-то проблемы с названием категории'
  })
  const [url, setUrl] = useState({
    value: '',
    placeholder: 'Введите URL категории',
    err: false,
    errMessage: 'Какие-то проблемы с URL категории'
  })
  const [img, setImg] = useState({
    value: '',
    placeholder: 'Введите URLimg категории',
    err: false,
    errMessage: 'Какие-то проблемы с  URLimg категории'
  })
  const [subCategories, setSubCategories] = useState(
    [
      {
        value: '',
        url: ''
      }
    ]
  )

  const setTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitleOptions( setParam(titleOptions, {value: event.target.value}) )
  }

  const setUrlFunction = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUrl( setParam(url, {value: event.target.value}) )
  }

  const setImgFunction = (event:React.ChangeEvent<HTMLInputElement>) => {
    setImg( setParam(img, {value: event.target.value}) )
  }

  return (
    <StyledContainer>
      <StyledCategory>
        <BaseInput 
          options={titleOptions}
          setValue={setTitle}
        />
        <BaseInput 
          options={url}
          setValue={setUrlFunction}
        />
        <BaseInput 
          options={img}
          setValue={setImgFunction}
        />
        <SubCategories />
        <BaseButton click={() => dispatch(addCategory())}>
          ADD
        </BaseButton>
      </StyledCategory>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 20px auto;
  max-width: 1170px;
`

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export default AdminPanel