import styled from "styled-components";
import { ReactComponent as DIcon } from "../../../../../img/trash-04.svg";
import { ReactComponent as MainIcon } from "../../../../../img/1.svg";
import { ReactComponent as PIcon } from "../../../../../img/pen.svg";
import {Link} from "react-router-dom";

export const Icon = styled(MainIcon)`
    width: 16px;
    height: 16px;
`
export const Container = styled.div`
    padding: 24px;
    background: ${({ checked }) => (checked ? "#1F1F1F" : "transparent")};
    display: flex;
    justify-content: space-between;
    border-right: ${({ checked }) => (checked ? "#BEDBB0 4px solid" : "transparent 4px solid")};
    
`
export const Text = styled(Link)`
display: flex;
    opacity: ${({ checked }) => (checked ? 1 : 0.50)};
    font-weight: 500;
    text-decoration: none;
    align-items: center;
    font-size: 14px;
    gap: 8px;
`
export const IconsWrap = styled.div`
    svg {
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            transform: scale(1.1);
        }
    }
    display: flex;
    gap: 8px;
`
export const PenIcon = styled(PIcon)`
    width: 16px;
    height: 16px;

    path {
        stroke: rgba(255, 255, 255, 0.50);
    }

    &:hover {
        path {
            stroke: #BEDBB0;
            transition: stroke 0.3s;
        }
    };
`
export const DeleteIcon = styled(DIcon)`
    width: 16px;
    height: 16px;

    path {
        stroke: rgba(255, 255, 255, 0.50);
    }

    &:hover {
        path {
            stroke: #BEDBB0;
            transition: stroke 0.3s;
        }
    };
`
