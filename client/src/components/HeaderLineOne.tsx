import React from 'react'
import styled from 'styled-components'
import BaseModal from './BaseModal'
import BaseToggle from './BaseToggle'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { getAllCities } from '../store/actions/cities'
import { BsFillXCircleFill } from "react-icons/bs"
import InputDropDown from './InputDropDown'

const HeaderLineOne = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllCities())
  }, [dispatch])

  const optionsOne = [
    {
      title: 'Светлая',
      value: 'light'
    },
    {
      title: 'Тёмная',
      value: 'dark'
    }
  ]

  const optionsTwo = [
    {
      title: 'RU',
      value: 'ru'
    },
    {
      title: 'UA',
      value: 'ua'
    }
  ]
  
  const [show, setShow] = React.useState(false)
  const [title, setTitle] = React.useState('Николаев')
  const [search, setSearch] = React.useState('')
  const { cities } = useTypedSelector(
    (state) => state.cities
  )

  const citiesNode = cities.concat().splice(0, 6).map(city => {
    return (
      <div 
        key={city._id} 
        onClick={() => {
          setTitle(city.title)
          setShow(!show)
        }} 
      >{city.title}</div>
    )
  })

  return (
    <Div data-left={'125px'} data-show={show}>
      <BaseModal 
        setShowModal={() => setShow(!show)} 
        title={title}
        show={show}
      >
        <div className="Modal__body">
          <div className="Modal__BodyTitle">
            Выберите город: 
            <BsFillXCircleFill onClick={() => setShow(!show)} />
          </div>
          <div className="Modal__city">
            {citiesNode}
          </div>
          <div className="Modal__search">
            <InputDropDown 
              cities={cities} 
              search={search} 
              change={(event:React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
              choseCity={(title) => {
                setTitle(title)
                setShow(false)
              }}
            />
          </div>
        </div>
      </BaseModal>
      <BaseToggle options={optionsOne} />
      <ul>
        <li>Блог</li>
        <li>Fishka</li>
        <li>Вакансии</li>
        <li>Магазины</li>
        <li>Доставка и оплата</li>
        <li>Кредит</li>
        <li>Гарантия / Возврат</li>
        <li>Контакты</li>
      </ul>
      <BaseToggle options={optionsTwo} />
    </Div>
  )
}

const Div = styled.div `
  display: flex;
  justify-content: space-around;

  & ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;

    & li {
      list-style-type: none;
    }
  }

.Modal__body{
  width: 260px;
  height: 213px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${(props: any) => props['data-left']};
  top: 20px;
  transform: ${(props: any) => props['data-show'] 
    ? 'scale(1) translateX(-50%)' 
    : 'scale(0) translateX(-50%)'};
  padding: 0 15px;
  z-index: 3;
  transition: all 0.3s;
  opacity: ${(props: any) => props['data-show'] ? '1' : '0'};

  .Modal__BodyTitle {
    margin-top: 15px;
    user-select: none;
    width: 100%;
    display: flex;
    justify-content: space-between;

    svg{
      cursor: pointer;
    }
  }

  .Modal__city{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    div{
      padding: 5px;
      color: #3131f3;
      cursor: pointer;
    }

    div:hover{
      background-color: #f1f1f1;
    }
  }

  .Modal__search{
    margin-bottom: 15px;
  }
}

`

export default HeaderLineOne