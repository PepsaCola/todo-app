import styled from "styled-components";
import { ReactComponent as HelpIcon } from "../../../../img/help-circle.svg";

export const Container = styled.div`
    background: #1F1F1F; 
    border-radius: 8px;
    padding: 20px;
`
export const Img = styled.img`
width: 54px;`
export const Text = styled.p`
    
margin-top: 14px;
`
export const HelpWrap = styled.div`
display: flex;
gap: 8px;
    align-items: center;
    margin-top: 18px;
`
export const Icon = styled(HelpIcon)`
width: 20px;

`
export const IconText = styled.p`
    font-size: 12px;`