import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff, #BEDBB0);`
export const FormWrapper = styled.form`
    background-color: #151515 ;
    padding: 24px;
    border-radius: 8px;
    width: 335px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 14px;
    @media screen and (min-width: 768px){
        width: 424px;
        padding: 40px;
    }
`
export const Tabs = styled.div`
display: flex;
justify-content: left;
    gap: 14px;
    margin-bottom: 26px;
    
`
export const Tab = styled(Link)`
    color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.30)')};
    font-weight: ${(props) => (props.active ? '500' : 'normal')};
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`
export const Input = styled.input`
    outline: none;
    padding: 14px 18px;
    opacity: 0.40; 
    background: #1F1F1F; 
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08); 
    border-radius: 8px; 
    overflow: hidden; 
    border: 1px #BEDBB0 solid;
    font-size: 14px;
    color: white;
    box-sizing: border-box;
    &::placeholder {
        color: white; 
        font-size: 14px;
    }
    &:focus {
        opacity: 1;
    }
   
`
export const PasswordInput = styled.input`
    outline: none;
    padding: 14px 18px;
    opacity: 0.40;
    background: #1F1F1F;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    overflow: hidden;
    border: 1px #BEDBB0 solid;
    font-size: 14px;
    color: white;
    &::placeholder {
        color: white;
        font-size: 14px;
    }
    &:focus {
        opacity: 1;
    }`
export const Button = styled.button`
    color: #161616;
    font-size: 14px;
    font-weight: 500;
    padding: 14px;
    background-color: #BEDBB0;
    border-radius: 8px;
    border: transparent 1px solid;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        background-color: #9DC888;
        transform: scale(1.02); /* Легке збільшення при наведенні */
    }

    &:focus {
        outline: 2px solid #9DC888; /* Видимий фокус для кращої доступності */
    }

    &:active {
        transform: scale(1); /* Легке стиснення при натисканні */
    }
`