import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <div>Присоединяйся к нашим соц. сетям!</div>
        <div>Узнавай о новых акциях!</div>
        <div>Обращайся по любым вопросам!</div>
      </FooterTop>
      <FooterBottom>
        <div>
          <h3>Компания</h3>
          <ul>
            <li>О нас</li>
            <li>Вакансии</li>
            <li>Пресс-центр</li>
            <li>Сеть магазинов</li>
            <li>Корпоративным клиентам</li>
            <li>Контакты</li>
            <li>Условия использования сайта</li>
            <li>Как продавать</li>
          </ul>
        </div>
        <div>
        <h3>Помощь</h3>
          <ul>
            <li>Вопросы и ответы</li>
            <li>Доставка и оплата</li>
            <li>Купить в кредит</li>
            <li>Оплата частями</li>
            <li>Гарантия и сервисные центры</li>
            <li>Статьи и обзоры</li>
            <li>Оставить отзыв о нашей работе</li>
          </ul>
        </div>
        <div>
        <h3>Полезная информация</h3>
          <ul>
            <li>Сервисы</li>
            <li>Деньги</li>
            <li>Fishka</li>
            <li>Корзина</li>
            <li>Подарочная карта</li>
            <li>СТраховка</li>
            <li>Юридически сервис</li>
          </ul>
        </div>
        <div>
          LOGO
        </div>
      </FooterBottom>
    </StyledFooter>
  )
}

const StyledFooter = styled.div `
  display: flex;
  flex-direction: column;
`

const FooterTop = styled.div `
  display: flex;
`

const FooterBottom = styled.div `
  display: flex;
  justify-content: space-around;
`

export default Footer