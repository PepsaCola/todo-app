import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as StartIcon } from "../../img/startIcon.svg";

// Контейнер сторінки
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: 100vh;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff, #BEDBB0); /* Білий -> Зелений градієнт */
`;

// Зображення
export const Img = styled.img`
    width: 162px;
`;

// Заголовок з іконкою
export const Title = styled.h1`
  display: flex;
  align-items: center;
    color: #161616;
  gap: 14px;
  font-size: 2rem;
  font-weight: bold;
`;

// Опис
export const Description = styled.p`
  max-width: 500px;
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;

// Кнопка реєстрації
export const Button = styled(Link)`
    text-decoration: none;
    padding: 14px 131px;
    background-color: black;
    color: white;
    border-radius: 8px;
    display: inline-block;
    font-weight: bold;
    transition: 0.3s;
    font-size: 1rem;

    &:hover {
        background-color: #333;
    }
`;

// Посилання входу
export const A = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;
export const Icon = styled(StartIcon)`
background-color: black;
    padding: 12px 15px;
    border-radius: 10px;
`
export const StartWrap = styled.div`
display: flex;
flex-direction: column;
    gap: 14px;
    margin-top: 24px;
`