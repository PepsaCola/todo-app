import styled from "styled-components";
import { ReactComponent as DownIcon } from "../../../img/chevron-down.svg";
import { ReactComponent as Plus } from "../../../img/plus.svg";

export const Container = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    background: #161616;
    padding: 18px 24px;
    gap: 14px;
    
`
export const Icon = styled(DownIcon)`
width: 16px;
height: 16px;
`
export const Text = styled.p`
display: flex;
    font-size: 14px;
    align-items: center;
    gap: 4px;
    color: rgba(255, 255, 255, 0.80);
    font-weight: 500
    `
export const Name = styled.h3`
    font-size: 14px;`
export const Img = styled.img`
width:32px;
height:32px;
`
export const HeaderWrap = styled.div`
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
    background: #1F1F1F;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    overflow: hidden;
    border: 1px #BEDBB0 solid;
    font-size: 14px;
    color: white;
    opacity: 0.4;
    &::placeholder {
        color: white;
        font-size: 14px;
    }
    &:focus {
        opacity: 1;
    }
    
`