import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 24px ${(props) => props.theme.pageSidePadding};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Copyright = styled.span`
  margin: 0;
  padding: 8px 12px;
  min-height: 43px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorLightBackground};
`;
