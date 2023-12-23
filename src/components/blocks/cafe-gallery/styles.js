import styled from "styled-components";
import pawImage from "/src/assets/backgrounds/gallery/paw.svg";
import spotImage from "/src/assets/backgrounds/gallery/spot.svg";
import plantsImage from "/src/assets/backgrounds/gallery/plants.svg";
import Title from "/src/components/ui/title/title";
import { Section as ElementSection } from "/src/components/elements";

export const StyledSection = styled(ElementSection)`
  padding: 79px ${(props) => props.theme.pageSidePadding} 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  min-height: 854px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorDarkBackground};
  background-size: 225px 222px, 321px 305px, 113px 144px;
  background-repeat: no-repeat;
  background-position: top 82px right 0px, top right, left bottom;
  background-image: url(${pawImage}), url(${spotImage}), url(${plantsImage});
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 44px;
`;
