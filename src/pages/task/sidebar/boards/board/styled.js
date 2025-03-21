import styled from "styled-components";
import { ReactComponent as DIcon } from "../../../../../img/trash-04.svg";
import { ReactComponent as MainIcon } from "../../../../../img/1.svg";
import { ReactComponent as PIcon } from "../../../../../img/pen.svg";
import {Link} from "react-router-dom";

export const Icon = styled(MainIcon)`
    width: 16px;
    height: 16px;
`
export const NameWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
`
export const Container = styled.div`
    padding: 24px;
    background: ${({ checked }) => (checked ? "#1F1F1F" : "transparent")};
    display: flex;
    justify-content: space-between;
    border-right: ${({ checked }) => (checked ? "#BEDBB0 4px solid" : "transparent 4px solid")};
    gap: 20px;
`
export const Text = styled(Link)`
    width: 120px;
    opacity: ${({ checked }) => (checked ? 1 : 0.50)};
    font-weight: 500;
    text-decoration: none;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Обмежуємо до 2 рядків */
    -webkit-box-orient: vertical;
    font-size: 14px;
    overflow: hidden;
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
