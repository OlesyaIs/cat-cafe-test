import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.pageSidePadding};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 0px 2px 0px rgba(0, 0, 0, 0.06),
    0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  z-index: 1;
`;
