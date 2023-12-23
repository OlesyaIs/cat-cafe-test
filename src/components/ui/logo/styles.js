import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Text = styled.span`
  margin-left: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: ${(props) => props.theme.textColor};
`;
