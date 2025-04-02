import styled from "styled-components";
import { ReactComponent as FIcon } from "../../img/filter.svg";
import { ReactComponent as MIcon } from "../../img/menu.svg";

import photo1 from "../../img/desktop/photo-1.png";
import photo2 from "../../img/desktop/photo-2.png";
import photo3 from "../../img/desktop/photo-3.png";
import photo4 from "../../img/desktop/photo-4.png";
import photo5 from "../../img/desktop/photo-5.png";
import photo6 from "../../img/desktop/photo-6.png";
import photo7 from "../../img/desktop/photo-7.png";
import photo8 from "../../img/desktop/photo-8.png";
import photo9 from "../../img/desktop/photo-9.png";
import photo10 from "../../img/desktop/photo-10.png";
import photo11 from "../../img/desktop/photo-11.png";
import photo12 from "../../img/desktop/photo-12.png";
import photo13 from "../../img/desktop/photo-13.png";
import photo14 from "../../img/desktop/photo-14.png";
import photo15 from "../../img/desktop/photo-15.png";

export const backgrounds = {
    "photo-1": photo1,
    "photo-2": photo2,
    "photo-3": photo3,
    "photo-4": photo4,
    "photo-5": photo5,
    "photo-6": photo6,
    "photo-7": photo7,
    "photo-8": photo8,
    "photo-9": photo9,
    "photo-10": photo10,
    "photo-11": photo11,
    "photo-12": photo12,
    "photo-13": photo13,
    "photo-14": photo14,
    "photo-15": photo15,
};

export const MenuIcon = styled(MIcon)`
    width: 32px;
    height: 32px;
    margin-right: auto;
    cursor: pointer;
    path{
        stroke: var(--header-text-color);
    }
    @media screen and (min-width: 1440px){
        display: none;
    }
`

export const Container = styled.div`
display: flex;
    height: 100vh;
        position: relative;
    
`
export const TaskWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1440px){
        width:calc(100% - 260px);
    }
`
export const ColumnsWrap = styled.div`
    flex-grow: 1;
    padding: 14px 20px;
    
    display: flex;
    flex-direction: column;
    background-color: var(--body-background-color); 
    background-image: ${({ back }) => (back ? `url(${back})` : 'none')};
    background-size: cover;
    background-position: center;
    overflow-x: auto;
    overflow-y: hidden;
    @media screen and (min-width: 1440px){
        padding: 10px 24px;
    }
`;
export const TitleWrap = styled.div`
display: flex;
justify-content: space-between;
    margin-bottom: 10px;
`
export const Title = styled.h3`
    font-size: 18px;
    color: var(--tasks-text-color);
`
export const Filter = styled.p`
    cursor: pointer;
display: flex;
    gap: 8px;
    align-items: center;
    color: var(--tasks-text-color);
    opacity: 0.8;
    font-size: 14px;
`
export const Label = styled.label`
display: flex;
    gap: 8px;
    align-items: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    color: ${({ checked }) => checked ? 'var(--tasks-span-hover-color)' : 'var(--tasks-span-color)'};
`
export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const LabelText = styled.p`
    color: var(--tasks-text-color); 
    font-size: 14px; 
    font-weight: 500;
`
export const LabelWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
export const LabelSpan = styled.span`
    color: var(--tasks-span-color); 
    font-size: 12px;
    text-decoration: underline;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: var(--tasks-span-hover-color);
    }
`
export const Message = styled.p`
color: var(--tasks-text-color);
`
export const Icon = styled(FIcon)`
    width: 16px;
    height: 16px;
    path{
        stroke: var(--tasks-text-color);
        stroke-opacity: 0.8;
    }
`