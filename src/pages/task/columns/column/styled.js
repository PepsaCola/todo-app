import styled from "styled-components";
import { ReactComponent as DIcon } from "../../../../img/trash-04.svg";
import { ReactComponent as PIcon } from "../../../../img/pen.svg";
import { ReactComponent as PlIcon } from "../../../../img/w_plus.svg";

export const Container = styled.li`
display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 334px;
`
export const IconsWrap = styled.div`
display: flex;
    gap: 10px;
    svg {
        cursor: pointer;
        transition: 0.2s;
        width: 18px;
        height: 18px;
        &:hover {
            transform: scale(1.1);
        }
        }
`
// export const Wrap = styled.div`
//     display: block;
//     flex-grow: 1; /* Дозволяє займати весь доступний простір */
//     min-height: 0; /* Дозволяє елементу стискатися */
//     overflow: hidden;
// `
export const Btn = styled.button`
    cursor: pointer;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 13.5px 89px;
    color: var(--btn-text-color);
    background-color: var(--btn-background-color);
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: auto;
`

export const TitleWrap = styled.div`
    max-width: 334px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    background: var(--tasks-background-color);
padding: 18px 24px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    flex-grow: 1;
    height: 100%;

    /* Firefox */
    scrollbar-color: var(--scrollbar-color) var(--scrollbar-background-color);
    scrollbar-width: thin;
    /* WebKit (Chrome, Edge, Safari) */

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #121212;
        border-radius: 10px;
        transition: background 0.3s;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #121212;
    }

   
`;

export const Title = styled.h2`
    color: var(--tasks-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    font-size: 14px;`

export const Icon = styled(PlIcon)`
    width: 14px;
    height: 14px;
    background: var(--btn-plus-background-color);
    padding: 7px;
    border-radius: 8px;
    path{
        stroke: var(--btn-plus);
    }
`
export const DeleteIcon = styled(DIcon)`
    path {
        stroke: rgba(255, 255, 255, 0.50);
    }

    &:hover {
        path {
            stroke: #BEDBB0;
            transition: stroke 0.3s;
        }
    };
`;
export const PenIcon = styled(PIcon)`
    path {
        stroke: rgba(255, 255, 255, 0.50);
    }

    &:hover {
        path {
            stroke: #BEDBB0;
            transition: stroke 0.3s;
        }
    };
`;