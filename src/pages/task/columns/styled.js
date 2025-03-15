import styled from "styled-components";
import { ReactComponent as PIcon } from "../../../img/plus.svg";


export const List = styled.ul`
    height: 100%;
display: flex;
    gap: 18px;
`
export const ListItem = styled.li`
    width: 334px;
`
export const Btn = styled.button`
    
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    background-color: #121212;
    padding: 13.5px 79px;
    border: none;
    box-sizing: border-box;
`
export const Icon = styled(PIcon)`
    display: inline-block;
background-color: white;
padding: 7px;
    width: 14px;
    height: 14px;
    border-radius: 8px;
`