import styled from "styled-components";

export const InpDescription = styled.textarea`
    outline: none;
    padding: 14px 18px;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    background-color: transparent;
    overflow: hidden;
    border: 1px #BEDBB0 solid;
    font-size: 14px;
    color: var(--tasks-text-color);
    resize: none;
    height: 154px;
    box-sizing: border-box;
    opacity: ${({ value }) => (value ? "1" : "0.4")};
    font-family: 'Poppins', sans-serif;
    &::placeholder {
        color: var(--tasks-text-color);
        
    }
    &:focus {
        opacity: 1;
    }
`

const getColor = (value) => {
    switch(value) {
        case "Low": return "#8FA1D0";
        case "Medium": return "#E09CB5";
        case "High": return "#BEDBB0";
        case "Without": return "var(--tasks-border-left-color)";
        default: return "transparent";
    }
};

export const ColorOption = styled.input.attrs({ type: "radio" })`
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.3s ease-in-out;
    background-color: ${({ value }) => getColor(value)};

    &:checked {
        border: 2px solid ${({ value }) => getColor(value)};
        box-shadow: 0 0 5px var(--pop-up-option-shadow);
    }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
    width: 100%;
`;

export const LabelText = styled.span`
  color:var(--tasks-span-color);
  font-size: 14px;
`;

export const DateInput = styled.input`
    display: block;
    box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #2b2b2b;
  color: #fff;
  outline: none;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #62d862;
    box-shadow: 0 0 5px rgba(98, 216, 98, 0.5);
  }
`;