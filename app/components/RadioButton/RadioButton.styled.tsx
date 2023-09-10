import { css, styled } from "styled-components";
import type {
  IBoxRadioButtonStyle,
  IRadioButtonContainerStyle,
  IRadioButtonStyle,
} from "./RadioButton.type";

export const SRadioButtonContainer = styled.label<IRadioButtonContainerStyle>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.$margin};
`;

export const SRadioButton = styled.div<IRadioButtonStyle>`
  display: inline-flex;
  position: relative;
  width: 20px;
  height: 20px;

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    opacity: 0;
    box-sizing: border-box;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    border-radius: 100%;

    border: ${(props) =>
      props.checked ? "1px solid #f37321" : "1px solid #c4c7c9"};
    background-color: ${(props) => (props.checked ? "#f37321" : "#fff")};
    transition: all 0.1s;

    ${(props) =>
      props.disabled &&
      (props.checked
        ? `border-color: #c4c7c9; 
      background-color: #c4c7c9;`
        : `border-color: #c4c7c9; 
      background-color: #f1f4f7;`)};

    > span {
      width: 8px;
      height: 8px;
      border: 0;
      border-radius: 100%;
      background-color: #fff;

      ${(props) =>
        props.disabled &&
        (props.checked
          ? `
      background-color: #e5e8eb;`
          : `
      background-color: #f1f4f7;`)};
    }
  }
`;

export const SRadioButtonLabel = styled.span<IRadioButtonStyle>`
  display: inline-flex;
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => (props.disabled ? "#C4C7C9" : "2B2F33")};
  margin-left: 8px;
`;

export const SBoxRadioButton = styled.div<IBoxRadioButtonStyle>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: ${(props) => props.$width || "78px"};
  height: ${(props) => props.$height || "48px"};

  border: 1px solid #e5e8eb;
  border-radius: ${(props) => props.$borderRadius};
  background: ${(props) => (props.checked ? "#FFEFD7" : "#fff")};

  color: ${(props) => (props.checked ? "#f37321" : "#90989f")};
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        border: 1px solid #f37321;
        border-radius: ${props.$borderRadius};
      }
    `}

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    opacity: 0;
    box-sizing: border-box;
  }
`;
