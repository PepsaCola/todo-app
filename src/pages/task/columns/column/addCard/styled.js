import styled from "styled-components";

export const InpDescription = styled.textarea`
    outline: none;
    padding: 14px 18px;
    background: #1F1F1F;
    box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    overflow: hidden;
    border: 1px #BEDBB0 solid;
    font-size: 14px;
    color: white;
    resize: none;
    height: 154px;
    box-sizing: border-box;
    opacity: ${({ value }) => (value ? "1" : "0.4")};
    font-family: 'Poppins', sans-serif;
    &::placeholder {
        color: white;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }
    &:focus {
        opacity: 1;
    }
`

export const ColorOption = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.3s ease-in-out;
  
  &:nth-child(1) { background-color: #8FA1D0; }  
  &:nth-child(2) { background-color: #E09CB5; }  
  &:nth-child(3) { background-color: #BEDBB0; }  
  &:nth-child(4) { background-color: rgba(255, 255, 255, 0.30); }      /* Сірий */

  &:checked {
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
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
  color: rgba(255, 255, 255, 0.50);
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