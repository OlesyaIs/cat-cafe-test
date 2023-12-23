import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  margin: 0;
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)}px;
  padding: 16px 24px;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : "50px")};
  min-height: 60px;
  max-width: 460px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colorWhite};
  border: none;
  box-shadow: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colorButton};
  transition: background-color 0.2s ease-out, box-shadow 0.1s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }
`;
