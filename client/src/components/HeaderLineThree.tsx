import React from 'react'
import styled from 'styled-components'

const HeaderLineThree = () => {
  return (
    <Container>
      <div>
        Каталог
      </div>
      <div>
        Номер Выпадашка
      </div>
      <div>
        поиск товара
      </div>
      <div>
        вход
      </div>
      <div>
        Корзина
      </div>
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  justify-content: space-around;


`

export default HeaderLineThree