import styled from "styled-components";
import { ReactComponent as DIcon } from "../../../../../img/trash-04.svg";
import { ReactComponent as RIcon } from "../../../../../img/raplace.svg";
import { ReactComponent as PIcon } from "../../../../../img/pen.svg";

const priorityColors = {
    "Without priority": "3px solid rgba(255, 255, 255, 0.30)",
    Low: "3px solid #8FA1D0",
    Medium: "3px solid #E09CB5",
    High: "3px solid #BEDBB0",
};

export const Container = styled.li`
    background-color: #121212;
    border-left: ${({ priority }) => priorityColors[priority] || "3px solid rgba(255, 255, 255, 0.30)"};

    color: #fff;
    box-sizing: border-box;
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    min-height: 154px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    position: relative;
`;

export const Title = styled.h3`
    font-size: 14px;
  font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Обмежуємо до 2 рядків */
    -webkit-box-orient: vertical;
`;

export const Description = styled.p`
    font-size: 12px;
  color: #b0b0b0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Обмежуємо до 2 рядків */
  -webkit-box-orient: vertical;
`;

export const BoxWrap = styled.div`
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    padding-top: 14px;
    gap: 14px;
`

export const PriorityWrap = styled.div`
box-sizing: content-box;`
export const DeadlineWrap = styled.div`
    box-sizing: content-box;
`
export const Priority = styled.p`
    display: flex;
    align-items: center;
    font-size: 10px;

    &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 6px;
        background-color: ${({ priority }) =>
                priority === "Without priority"
                        ? "rgba(255, 255, 255, 0.30)"
                        : priority === "Low"
                                ? "#8FA1D0"
                                : priority === "Medium"
                                        ? "#E09CB5"
                                        : priority === "High"
                                                ? "#BEDBB0"
                                                : "#ccc"};
    }
`;


export const Span = styled.span`
color:rgba(255, 255, 255, 0.50);
    font-size: 8px;
    display: block;
    margin-bottom: 4px;
`

export const Deadline = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 10px;
`;

export const IconsWrap = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 14px;
  right: 14px;

  svg {
    cursor: pointer;
    transition: 0.2s;
    width: 18px;
    height: 18px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ReplaceIcon = styled(RIcon)`
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
    }

    
`;

export const ReplText = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.50);
    
    &:hover {
        color: #BEDBB0;
        & ${ReplaceIcon} {
            path {
                stroke: #BEDBB0;
                transition: stroke 0.3s;
            }
        }
        
    }
`

export const CreatePopup= styled.div`
    background-color: #151515;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    color: white;
    position: relative;
    gap:8px; 
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
    }`;
export const PenIcon = styled(PIcon)`
    path {
        stroke: rgba(255, 255, 255, 0.50);
    }
    &:hover {
            path {
                stroke: #BEDBB0;
                transition: stroke 0.3s;
            }
    }
`;
