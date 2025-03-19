import styled from "styled-components";
import { ReactComponent as PIcon } from "../../../img/plus.svg";


export const List = styled.ul`
    overflow-x: auto;
    max-width: 1600px;
    height: 100%;
display: flex;
    gap: 18px;
    scrollbar-color: #121212 rgba(255, 255, 255, 0.1);
    scrollbar-width: thin;
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
    min-width: 334px;
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