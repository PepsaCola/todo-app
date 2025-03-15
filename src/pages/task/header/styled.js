import styled from "styled-components";
import { ReactComponent as DownIcon } from "../../../img/chevron-down.svg";

export const Container = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    background: #161616;
    padding: 18px 24px;
    width: auto;
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