import styled from "styled-components";
import { Article } from "/src/components/elements";
import StarFeature from "/src/components/ui/star-feature/star-feature";

export const StyledArticle = styled(Article)`
  padding: ${(props) => props.theme.indent};
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 353px;
  min-height: 525px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const StyledFigure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const StyledFeature = styled(StarFeature)`
  position: absolute;
  top: 0;
  left: 0;
`;
