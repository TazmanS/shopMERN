import React, {useState} from 'react'
import styled from 'styled-components'
import {SIZE, BG_COLOR, COLOR} from '../cssVariables'
import { AiFillAppstore } from "react-icons/ai"
import CatalogItem from './CatalogItem'


const Catalog = () => {
  const [show, setShow] = useState(true)
  const [subIndex, setSubIndex] = useState<Number | null>(null);

  const hideElement = () => {
    setShow(false)
  }

  const changeShow = () => {
    setShow(!show)
  }

  const deleteSubIndex = () => {
    setSubIndex(null)
  }

  const changeSubIndex = (index : number) => {
    console.log(index)
    setSubIndex(index)
  }

  return (
    <StyledContainer onMouseLeave={hideElement}>
      <StyledButton onClick={changeShow}>
        <AiFillAppstore className="icon"/>
        <div className="text">Каталог товаров</div>
      </StyledButton>

      {show && 
        <StyledWrap onMouseLeave={deleteSubIndex}>
          <StyledItems subIndex={subIndex ? subIndex : undefined}>
            <CatalogItem mouseEnter={changeSubIndex}/>
            <CatalogItem mouseEnter={changeSubIndex}/>
            <CatalogItem mouseEnter={changeSubIndex}/>
            <CatalogItem mouseEnter={changeSubIndex}/>
            <CatalogItem mouseEnter={changeSubIndex}/>
            <CatalogItem mouseEnter={changeSubIndex}/>  
          </StyledItems>

          {subIndex && 
            <StyledSubItems>
              <div>
                TEXT
              </div>
            </StyledSubItems>
            
          }
        </StyledWrap>
      }
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
`

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 272px;
  height: 49px;
  background-color: ${BG_COLOR.red};
  cursor: pointer;
  user-select: none;

  .icon{
    font-size: ${SIZE.size4};
    margin: 0 20px;
  }

  .text{
    font-size: calc(${SIZE.size2} + 2px);
  }
` 

const StyledWrap = styled.div`
  position: absolute;
  display: flex;
  color: ${COLOR.main};
  background-color: ${BG_COLOR.white};
  box-shadow: -1px -1px 10px rgb(0 0 0 / 35%);
  padding: 10px 0;
`

const StyledItems = styled.div<{subIndex: Number | undefined}>`
  border-right: ${({subIndex}) => subIndex ? `1px solid ${BG_COLOR.light_grey}`  : null};
`

const StyledSubItems = styled.div`

`

export default Catalog