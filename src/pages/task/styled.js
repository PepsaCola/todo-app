import styled from "styled-components";
import { ReactComponent as FIcon } from "../../img/filter.svg";


export const Container = styled.div`
display: flex;

`
export const TaskWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
export const ColumnsWrap = styled.div`
    padding:  10px 24px;
    display: flex;
    flex-direction: column;
    background-color: #1F1F1F;
    width: auto;
    flex-grow: 1;
`
export const TitleWrap = styled.div`
display: flex;
justify-content: space-between;
    margin-bottom: 10px;
`
export const Title = styled.h3`
    font-size: 18px;
`
export const Filter = styled.p`
display: flex;
    gap: 8px;
    align-items: center;
    color: rgba(255, 255, 255, 0.80);
    font-size: 14px;
`
export const Message = styled.p``
export const Icon = styled(FIcon)`
    width: 16px;
    height: 16px;
`