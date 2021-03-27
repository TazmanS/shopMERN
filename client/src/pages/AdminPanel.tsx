import React, { useState } from 'react'
import styled from 'styled-components'
import {addCategory} from '../store/actions/categories'
import {useDispatch} from 'react-redux'

const AdminPanel = () => {
  const dispatch = useDispatch()

  const [categoryTitle, setCategoryTitle] = useState('')
  const [categoryImg, setCategoryImg] = useState('')
  const [subCategory, setSubCategory] = useState([])

  return (
    <StyledContainer>
      <div>Admin Panel</div>
      <StyledCategory>
        <button onClick={() => dispatch(addCategory())}>
          ADD
        </button>
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