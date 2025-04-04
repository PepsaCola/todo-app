import styled from "styled-components";
import { ReactComponent as Plus } from "../../../../img/plus.svg";
import { ReactComponent as PlusW } from "../../../../img/w_plus.svg";
import { ReactComponent as Icon1 } from "../../../../img/boardIcons/icon-1.svg";
import { ReactComponent as Icon2 } from "../../../../img/boardIcons/icon-2.svg";
import { ReactComponent as Icon3 } from "../../../../img/boardIcons/icon-3.svg";
import { ReactComponent as Icon4 } from "../../../../img/boardIcons/icon-4.svg";
import { ReactComponent as Icon5 } from "../../../../img/boardIcons/icon-5.svg";
import { ReactComponent as Icon6 } from "../../../../img/boardIcons/icon-6.svg";
import { ReactComponent as Icon7 } from "../../../../img/boardIcons/icon-7.svg";
import { ReactComponent as Icon8 } from "../../../../img/boardIcons/icon-8.svg";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: var(--sidebar-create-border);
    border-bottom: var(--sidebar-create-border);
    padding: 14px 0;
    margin-top: 8px;
`
export const Text = styled.p`
    color: var(--sidebar-text-color);
    width: 76px;
    font-size: 14px; 
    font-weight: 500;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: var(--sidebar-btn-background-color);
    border-radius: 10px;
    border: none;
    padding: 8px 10px;
    display: block;
`
export const Icon = styled(Plus)`
    display: block;
    width: 20px;
    height: 20px;
    path{
        stroke: var(--sidebar-btn-plus);
    }
`

export const H3 = styled.h3``
export const H4 = styled.h4``

export const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 6px;
    & svg{
        path{
            stroke: var(--icons-color);
        }
    }
    &:has(input:checked){
        background-color: var(--icons-checked-background-color);
        svg{
            path{
                stroke: var(--icons-boards-cheched-color);
            }
        }
    } 
    &:hover{
        svg{
            path{
                stroke: var(--icons-boards-cheched-color);
            }
        }
    } 
`

export const InpTitle = styled.input`
    outline: none;
    padding: 14px 18px;
    background-color: transparent;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    overflow: hidden;
    border: 1px var(--input-border-color) solid;
    font-size: 14px;
    color: var(--tabs-text-color);
    opacity: ${({ value }) => (value ? "1" : "0.4")};
    &::placeholder {
        color: var(--tabs-text-color);;
        
    }
    &:focus {
        opacity: 1;
    }
    
`
export const InpIcon = styled.input`
    display: none;
`
export const InpPhoto = styled.input`
    display: none;
`

export const Back = styled.div`
    position: fixed; /* Фіксована позиція */
    top: 0;
    left: 0;
    width: 100vw; /* Закриває весь екран */
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Напівпрозорий чорний фон */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Щоб було поверх усього */
`

export const CreatePopup= styled.form`
    background-color: var(--pop-up-background-color);
    padding: 24px;
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    color: var(--tasks-text-color);
    position: relative;
    gap:24px; 
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`


export const Photo = styled.img`
`
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--tabs-text-color);
  cursor: pointer;
`;

export const CreateButton = styled.button`
  background: var(--btn-background-color);
  color: var(--btn-text-color);
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 20px;
`;

export const WPlus =styled(PlusW)`
    width: 14px;
    height: 14px;
    padding: 7px;
    background-color: var(--btn-plus-background-color);
    border-radius: 6px;
    path{
        stroke: var(--btn-plus);
    }
`
const IconQ = styled(Icon1)``
const IconW = styled(Icon2)``
const IconE = styled(Icon3)``
const IconR = styled(Icon4)``
const IconT = styled(Icon5)``
const IconY = styled(Icon6)``
const IconU = styled(Icon7)``
const IconI = styled(Icon8)``

const icons = [IconQ, IconW, IconE, IconR, IconT, IconY, IconU, IconI]
export default icons