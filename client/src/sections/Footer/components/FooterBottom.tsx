import React from 'react'
import styled from 'styled-components'
import {BG_COLOR, COLOR, SIZE} from '../../../helpers/cssVariables'

const FooterBottom = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        {/* <div>
          <StyledTitle>Компания</StyledTitle>
          <StyledList>
            <li>О нас</li>
            <li>Вакансии</li>
            <li>Пресс-центр</li>
            <li>Сеть магазинов</li>
            <li>Корпоративным клиентам</li>
            <li>Контакты</li>
            <li>Условия использования сайта</li>
            <li>Как продавать</li>
          </StyledList>
        </div>
        <div>
        <StyledTitle>Помощь</StyledTitle>
          <StyledList>
            <li>Вопросы и ответы</li>
            <li>Доставка и оплата</li>
            <li>Купить в кредит</li>
            <li>Оплата частями</li>
            <li>Гарантия и сервисные центры</li>
            <li>Статьи и обзоры</li>
            <li>Оставить отзыв о нашей работе</li>
          </StyledList>
        </div>
        <div>
        <StyledTitle>Полезная информация</StyledTitle>
          <StyledList>
            <li>Сервисы</li>
            <li>Деньги</li>
            <li>Fishka</li>
            <li>Корзина</li>
            <li>Подарочная карта</li>
            <li>СТраховка</li>
            <li>Юридически сервис</li>
          </StyledList>
        </div> */}
        <StyledLogo src='/reactLogo.png' alt="Logo" />
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  width: 100%;
  background-color: ${BG_COLOR.bg_dark_light};
  margin-top: 15px;
  padding-bottom: 50px;
`

const StyledWrap = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: ${COLOR.white};
  padding: 35px 0px;
  color: #bdbdbd;
  font-size: ${SIZE.size1};
`

// const StyledTitle = styled.div`
//   color: ${COLOR.white};
//   font-size: calc(${SIZE.size1} + 2px);
// `

// const StyledList = styled.ul`
//   li{
//     cursor: pointer;
//     margin: 10px 0;

//     :hover{
//       color: ${COLOR.white};
//     }
//   }
// `

const StyledLogo = styled.img `
  width: 152px;
  height: 76px;
  align-self: center;
`

export default FooterBottom