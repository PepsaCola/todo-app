import styled from "styled-components";
import { ReactComponent as StartIcon } from "../../../img/startIcon.svg";
import { ReactComponent as LogIcon } from "../../../img/logout.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 260px;
    background-color: var(--sidebar-background-color);
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    left: -100%;
    transition: left 0.3s ease-in-out;
    &.open {
        left: 0;
    }
    height: 100vh;
    scrollbar-color: #121212 rgba(255, 255, 255, 0.1);
    scrollbar-width: thin;
    

    @media screen and (min-width: 1440px) {
        
        position: relative;
        left: 0;
    }

    
`

export const Back = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(21, 21, 21, 0.5);
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    @media screen and (min-width: 1440px) {
        display: none;
    }
`

export const Title = styled.h2`
    color: var(--sidebar-text-color);
    font-size: 16px;
display: flex;
    gap: 8px;
    align-items: center;
`
export const Icon = styled(StartIcon)`
    width: 12px;
    height: 16px;
background-color: var(--logo-background-color);
    padding: 8px 10px;
    border-radius: 10px;
    path{
        stroke: var(--logo-icon-color);
        fill: var(--logo-icon-color);
    }
`
export const H3 = styled.h3`
    color: var(--sidebar-create-title);
    font-size: 12px;
    font-weight: 400;
    margin-top: 60px;
`
export const Button = styled.button`
    display: flex;
    color: var(--sidebar-text-color);
    gap: 14px;
    align-items: center;
    font-size: 16px;
background-color: transparent;
    border: none;
margin-top: 24px;
    cursor: pointer;
    font-weight: 500;
    &:hover svg {
        path {
            stroke: var(--logout-icon-hover-color);
            transition: stroke 0.3s;
        }
    }
`
export const LogOutIcon = styled(LogIcon)`
width: 32px;
    height: 32px;
    display: block;
    path{
        stroke: var(--logout-icon-color);
    }
`

export const TopDiv = styled.div`
padding: 24px;
`
export const BottomDiv = styled.div`
    margin-top: auto;
    padding: 24px;`