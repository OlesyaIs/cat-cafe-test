import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.size && props.size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.size && props.size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    return fontSize;
  }};
  line-height: 115%;
  font-weight: 700;
`;
