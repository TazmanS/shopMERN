import React from 'react'
import styled from 'styled-components'

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
    <Div>
      <input value={search} onChange={change} />
      {/* {search.trim() && citiesList.length > 0 */}
        <div className="DrowDown__list">
            { citiesList }
          </div>
        {/* : null
      } */}
    </Div>
  )
}

const Div = styled.div`

& {
  position: relative;
}

input{
  padding: 5px;
  font-size: 16px;
}

.DrowDown__list{
  max-height: 50px;
  width: calc(100% - 5px );
  overflow-y: hidden;
  position: absolute;
  z-index: 2;
  background-color: #e9e9e9;
  padding-right: 5px;

  .ListItem{
    cursor: pointer;
    padding: 5px 5px 5px 5px;


    &:hover{
      background-color: #999999;
    }
  }
}

`

export default InputDropDown