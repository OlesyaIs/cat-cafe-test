import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  ${(props) => (props.$flexColumn ? "flex-direction: column" : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "10")}px;
  flex-wrap: wrap;
  align-items: ${(props) =>
    props.$alignItems ? props.$alignItems : "stretch"};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isFlex ? flexBox : "")}
`;

export default Ul;
