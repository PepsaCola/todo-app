import styled from "styled-components";
import { ReactComponent as HelpIcon } from "../../../../img/help-circle.svg";

export const Container = styled.div`
    background: var(--sidebar-help-background-color); 
    border-radius: 8px;
    padding: 20px;
`
export const Img = styled.img`
width: 54px;`
export const Text = styled.p`
    color: var(--sidebar-text-color);
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
    path{
        stroke: var(--sidebar-text-color);
    }

`
export const IconText = styled.p`
    color: var(--sidebar-text-color);
    font-weight: 500;
    font-size: 12px;`