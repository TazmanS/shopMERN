import React from 'react'
import styled from 'styled-components'
import {NUMBER, BG_COLOR, COLOR} from '../cssVariables'
import BaseModal from './BaseModal'
import { BsFillXCircleFill } from "react-icons/bs"
import InputDropDown from './InputDropDown'
import { useTypedSelector } from '../hooks/useTypedSelector'

const GeoDropDown= () => {
  const [title, setTitle] = React.useState('Николаев')
  const [search, setSearch] = React.useState('')
  const [show, setShow] = React.useState(false)

  const { cities } = useTypedSelector(
    (state) => state.cities
  )

  const citiesNode = cities.concat().splice(0, 6).map(city => {
    return (
      <div 
        key={city._id} 
        onClick={() => {
          setSearch('')
          setTitle(city.title)
          setShow(!show)
        }} 
      >{city.title}</div>
    )
  })

  return (
    <BaseModal 
      setShowModal={() => setShow(!show)} 
      title={title}
      show={show}
    >
      <StyledModalBody left={'125px'} show={show}>
        <StyledModalBodyTitle>
          Выберите город: 
          <BsFillXCircleFill onClick={() => setShow(!show)} />
        </StyledModalBodyTitle>
        <StyledModalCites>
          {citiesNode}
        </StyledModalCites>
        <StyledModalSearch>
          <InputDropDown 
            cities={cities} 
            search={search} 
            change={(event:React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            choseCity={(title) => {
              setSearch('')
              setTitle(title)
              setShow(false)
            }}
          />
        </StyledModalSearch>
      </StyledModalBody>
    </BaseModal>
  )
}

const StyledModalBody = styled.div<{show: boolean, left: string}>`
  width: 260px;
  height: 213px;
  background-color: ${BG_COLOR.white};
  color: ${COLOR.main};
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${({left}) => left};
  top: calc(${NUMBER.num2});
  transform: ${({show}) => show 
    ? 'scale(1) translateX(-50%)' 
    : 'scale(0) translateX(-50%)'};
  padding: 0 calc(${NUMBER.num1} + 5px);
  z-index: 3;
  transition: all 0.3s;
  opacity: ${({show}) => show ? '1' : '0'};
`

const StyledModalBodyTitle = styled.div`
  margin-top: calc(${NUMBER.num1} + 5px);
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg{
    cursor: pointer;
  }
`

const StyledModalCites = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: calc(${NUMBER.num1} + 5px);

  div{
    padding: 5px;
    color: #3131f3;
    cursor: pointer;
  }

  div:hover{
    background-color: #f1f1f1;
  }
`

const StyledModalSearch = styled.div`
  margin-bottom: calc(${NUMBER.num1} + 5px);
`

export default GeoDropDown