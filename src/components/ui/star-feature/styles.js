import styled from "styled-components";

export const Feature = styled.span`
  padding: 8px 16px;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  border-radius: 8px 8px 8px 0px;
  background-color: ${(props) => props.$backgroundColor};
`;
