import styled from "styled-components";
import { ReactComponent as PIcon } from "../../../img/plus.svg";


export const List = styled.ul`
    overflow-x: auto;
    display: flex;
    gap: 18px;
    flex-grow: 1;
    width: 100%; /* Або конкретне значення, наприклад 1600px */
    scrollbar-color: #121212 rgba(255, 255, 255, 0.1);
    scrollbar-width: thin;
`;
export const ListItem = styled.li`
    width: 334px;
    flex-shrink: 0;
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