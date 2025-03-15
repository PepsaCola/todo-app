import styled from "styled-components";
import { ReactComponent as StartIcon } from "../../../img/startIcon.svg";
import { ReactComponent as LogIcon } from "../../../img/logout.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 260px;
    background-color: #121212;
    height: 100vh;
    
    box-sizing: border-box;
`

export const Title = styled.h2`
    font-size: 16px;
display: flex;
    gap: 8px;
    align-items: center;
`
export const Icon = styled(StartIcon)`
    width: 12px;
    height: 16px;
background-color: #1F1F1F;
    padding: 8px 10px;
    border-radius: 10px;
`
export const H3 = styled.h3`
    color: rgba(255, 255, 255, 0.50);
    font-size: 12px;
    font-weight: 400;
margin-top: 60px;
`
export const Button = styled.button`
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 16px;
background-color: transparent;
    border: none;
margin-top: 24px;
    cursor: pointer;
    &:hover svg {
        path {
            stroke: #9DC888;
            transition: stroke 0.3s;
        }
    }
`
export const LogOutIcon = styled(LogIcon)`
    
width: 32px;
    height: 32px;
    display: block;
    
`

export const TopDiv = styled.div`
padding: 24px;
`
export const BottomDiv = styled.div`
    padding: 24px;`