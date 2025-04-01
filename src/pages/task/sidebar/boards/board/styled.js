import styled from "styled-components";
import { ReactComponent as DIcon } from "../../../../../img/trash-04.svg";
import { ReactComponent as MainIcon } from "../../../../../img/1.svg";
import { ReactComponent as PIcon } from "../../../../../img/pen.svg";
import {Link} from "react-router-dom";

export const Icon = styled(MainIcon)`
    width: 16px;
    height: 16px;
`
export const NameWrap = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
`
export const Container = styled.div`
    padding: 24px;
    background: ${({ checked }) => (checked ? "var(--sidebar-board-checked-background-color)" : "transparent")};
    display: flex;
    justify-content: space-between;
    border-right: ${({ checked }) => (checked ? "var(--sidebar-board-right-color) 4px solid" : "transparent 4px solid")};
    gap: 20px;
`
export const Text = styled.p`
    width: 120px;
    opacity: ${({ checked }) => (checked ? 1 : 0.50)};
    font-weight: 500;
    color: ${({ checked }) => (checked ? "var(--sidebar-board-checked-text-color)" : "var(--sidebar-text-color)")};
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
        stroke: var(--sidebar-icon-color);
    }

    &:hover {
        path {
            stroke: var(--icon-hover-color);
            transition: stroke 0.3s;
        }
    };
`
export const DeleteIcon = styled(DIcon)`
    width: 16px;
    height: 16px;

    path {
        stroke: var(--sidebar-icon-color);
    }

    &:hover {
        path {
            stroke: var(--icon-hover-color);
            transition: stroke 0.3s;
        }
    };
`
