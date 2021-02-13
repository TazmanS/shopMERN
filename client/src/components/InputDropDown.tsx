import React from 'react'
import styled from 'styled-components'

interface InputDropDownI {
  cities: {
    title: string,
    value: string,
    id: number
  }[],
  search: string,
  change(event:React.ChangeEvent<HTMLInputElement>) :void
}

const InputDropDown:React.FC<InputDropDownI> = ({cities, search, change}) => {
  console.log(  )
  return (
    <Div>
      <input value={search} onChange={change} />
      <div className="DrowDown__list">
        { cities.concat().map(city => {
          if( city.title.toLowerCase().includes(search.toLowerCase()) ) {
            return (
              <div key={city.id}>{city.title}</div>
            )
          } else {
            return null
          }
        })}
      </div>
    </Div>
  )
}

const Div = styled.div`

& {
  position: relative;
}

.DrowDown__list{
  max-height: 50px;
  width: calc(100% - 5px );
  overflow: hidden;
  position: absolute;
  z-index: 2;
  background-color: #e9e9e9;
  padding: 5px 0 5px 5px;
}

`

export default InputDropDown