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
      <div>
        { cities.concat().map(city => {
          if( city.title.toLowerCase().includes(search.toLowerCase()) ) {
            return (
              <div key={city.title}>{city.title}</div>
            )
          }
        })}
      </div>
    </Div>
  )
}

const Div = styled.div`


`

export default InputDropDown