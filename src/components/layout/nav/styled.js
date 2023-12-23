import styled from "styled-components";
import Button from "/src/components/ui/button/button";
import { Ul } from "/src/components/elements";

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  color: ${(props) => props.theme.textColor};
  background-color: transparent;

  &:hover,
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const StyledUl = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
