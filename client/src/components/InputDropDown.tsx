import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, COLOR, NUMBER, SIZE} from '../cssVariables'

interface InputDropDownI {
  cities: {
    title: string,
    value: string,
    _id: string
  }[],
  search: string,
  change(event:React.ChangeEvent<HTMLInputElement>) :void,
  choseCity(title:string): void
}

const InputDropDown:React.FC<InputDropDownI> = ({cities, search, change, choseCity}) => {
  const citiesList = cities.map(city => {
    if( city.title.toLowerCase().includes(search.toLowerCase()) && search.trim() ) {
      return (
        <div 
          key={city._id}
          onClick={() => choseCity(city.title)}
          className="ListItem"
        >
          {city.title}
        </div>
      )
    } else {
      return null
    }
  })
  
  return (
    <Container>
      <input value={search} onChange={change} />
      <StyledDropDownList>
        { citiesList }
      </StyledDropDownList>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  input{
    padding: calc(${NUMBER.num0} + 5px);
    font-size: ${SIZE.size2};
  }
`

const StyledDropDownList = styled.div `
  /* max-height: 50px; */
  width: calc(100% - 5px);
  overflow-y: hidden;
  position: absolute;
  z-index: 2;
  background-color: ${BG_COLOR.bg_dark_light};
  padding-right: 5px;
  color: ${COLOR.white};

  .ListItem{
    cursor: pointer;
    padding: 5px;

    &:hover{
      background-color: ${BG_COLOR.grey};
    }
  }
`

export default InputDropDown