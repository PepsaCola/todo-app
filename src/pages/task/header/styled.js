import styled from "styled-components";
import { ReactComponent as DownIcon } from "../../../img/chevron-down.svg";
import { ReactComponent as Plus } from "../../../img/plus.svg";

export const Container = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    background: var(--header-background-color);
    padding: 18px 24px;
    gap: 14px;
    
`
export const Icon = styled(DownIcon)`
width: 16px;
height: 16px;
    opacity: 0.8;
    path{
        stroke: var(--header-text-color);
    }
`
export const Text = styled.p`
    cursor: pointer;
display: flex;
    font-size: 14px;
    align-items: center;
    gap: 4px;
    color: var(--header-text-color);
    opacity: 0.8;
    font-weight: 500
    `
export const Name = styled.h3`
    color: var(--header-text-color);
    font-size: 14px;`
export const Img = styled.img`
width:32px;
height:32px;
`
export const HeaderWrap = styled.div`
    cursor: pointer;
display: flex;
    align-items: center;
gap: 8px;
`
export const PopImg = styled.img`
    width: 68px;
    height: 68px;
    
`

export const Wrap = styled.div`
    margin: auto;
    position: relative;
`

export const Button = styled.button`
    position: absolute;
    cursor: pointer;
    background-color: #BEDBB0;
    border-radius: 10px;
    border: none;
    padding: 7px;
    display: block;
    left: 22px;
    top: 55px;
`
export const IconP = styled(Plus)`
    display: block;
    width: 10px;
    height: 10px;
`

export const Inp = styled.input`
    outline: none;
    padding: 14px 18px;
    background: transparent;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    overflow: hidden;
    border: 2px #BEDBB0 solid;
    font-size: 14px;
    color: var(--header-text-color);
    opacity: 0.4;
    &::placeholder {
        color: var(--header-text-color);
        font-size: 14px;
    }
    &:focus {
        opacity: 1;
    }
    
`

export const Wrapper = styled.div`
    position: relative; 
    display: inline-block;
`;

export const CreatePopup = styled.div`
    background-color: var(--pop-up-background-color);
    padding: 24px;
    //width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    
    position: absolute; 
    top: 100%; 
    left: 0;
    z-index: 1000;
    gap: 24px;
`;

export const Item = styled.p`
    color: var(--tasks-text-color);
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: var(--theme-hover-text-color);
        
    }
`