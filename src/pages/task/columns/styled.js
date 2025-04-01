import styled from "styled-components";
import { ReactComponent as PIcon } from "../../../img/plus.svg";


export const List = styled.ul`
    overflow-x: auto;
    display: flex;
    gap: 18px;
    flex-grow: 1;
    width: 100%;
    scrollbar-color: var(--scrollbar-color) var(--scrollbar-background-color);
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
    background-color: var(--tasks-background-color);
    color: var(--tasks-text-color);
    padding: 13.5px 79px;
    border: none;
    box-sizing: border-box;
`
export const Icon = styled(PIcon)`
    display: inline-block;
background-color: var(--tasks-text-color);
padding: 7px;
    width: 14px;
    height: 14px;
    border-radius: 8px;
    path{
        stroke: var(--tasks-background-color);
    }
`