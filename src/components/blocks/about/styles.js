import styled from "styled-components";
import {
  Section as ElementSection,
  Paragraph as ElementParagraph,
} from "/src/components/elements";
import aboutImage from "/src/assets/about.svg";

export const StyledSection = styled(ElementSection)`
  position: relative;
  padding: 159px ${(props) => props.theme.pageSidePadding};
  padding-right: 500px;
  background-color: ${(props) => props.theme.colorLightBackground};
  background-repeat: no-repeat;
  background-size: 446px 446px;
  background-position: top 50% right 90px;
  background-image: url(${aboutImage});
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.indent};
`;

export const Paragraph = styled(ElementParagraph)`
  margin-bottom: ${(props) => props.theme.indent};
  padding-right: 150px;
`;

export const WorkTime = styled(ElementParagraph)`
  display: inline-block;
  padding: 8px;
  min-height: 43px;
  align-self: flex-start;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorDarkBackground};
`;
