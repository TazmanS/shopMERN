import React from 'react'
import styled from 'styled-components'
import { 
  AiFillFacebook, 
  AiFillInstagram,
  AiFillTwitterCircle, 
  AiFillYoutube,
  AiFillMessage,
  AiFillSkype,
  AiFillGithub } from "react-icons/ai"
import {SIZE, BG_COLOR, COLOR} from '../cssVariables'


const FooterTop = () => {
  return (
    <StyledContainer>
      <StyledBlock>
        <StyledTitle>Присоединяйся к нашим соц. сетям!</StyledTitle>
        <div>
          <StyledIcon as={AiFillFacebook} /> 
          <StyledIcon as={AiFillInstagram} />
          <StyledIcon as={AiFillTwitterCircle} />
          <StyledIcon as={AiFillMessage} />  
        </div>
      </StyledBlock>
      <StyledBlock>
        <StyledTitle>Узнавай о новых акциях!</StyledTitle>
        <StyledSubscribe>
          <input type="email" placeholder="Введите Ваш e-mail" />
          <input type="submit" value="Подписаться" />
        </StyledSubscribe>
      </StyledBlock>
      <StyledBlock>
        <StyledTitle>Обращайся по любым вопросам!</StyledTitle>
        <div>
          <StyledIcon as={AiFillYoutube} />
          <StyledIcon as={AiFillSkype} />
          <StyledIcon as={AiFillGithub} />  
        </div>
      </StyledBlock>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: 1070px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
  box-shadow: -1px -1px 5px rgb(0 0 0 / 35%);
`

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: calc(${SIZE.size1} + 2px);
  margin-bottom: 10px;
`

const StyledIcon = styled.img`
  width: 45px;
  height: 45px;
  margin: 0 5px;
`

const StyledSubscribe = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  input[type=email] {
    margin-right: 20px;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${BG_COLOR.light_grey};
    font-size: ${SIZE.size2};
    width: 255px;
  }

  input[type=submit] {
    width: 120px;
    height: auto;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .75px;
    line-height: 36px;
    color: ${COLOR.white};
    background-color: ${BG_COLOR.blue};
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }
`

export default FooterTop