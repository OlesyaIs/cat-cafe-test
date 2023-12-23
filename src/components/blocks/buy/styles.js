import styled, { css } from "styled-components";
import topSpot from "/src/assets/backgrounds/buy/topSpot.svg";
import bottomSpot from "/src/assets/backgrounds/buy/bottomSpot.svg";
import cat from "/src/assets/backgrounds/buy/cat.svg";
import { Section as ElementSection } from "/src/components/elements";
import { Form } from "/src/components/styled";

export const StyledSection = styled(ElementSection)`
  padding: 100px ${(props) => props.theme.pageSidePadding};
  padding-right: 650px;
  min-height: 786px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
  background-color: ${(props) => props.theme.colorLightBackground};
  background-size: 447px 409px, 443px 468px, 349px 406px;
  background-repeat: no-repeat;
  background-position: top 277px right 90px, top 175px right 94px, bottom left;
  background-image: url(${cat}), url(${topSpot}), url(${bottomSpot});
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const FormItem = styled.div``;

export const Cost = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 115%;
`;

export const RadioLabelForTime = styled.span`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorButton};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.textColor};
          cursor: pointer;
        `};
`;

export const RadioLabelForType = styled.span`
  margin-left: -20px;
  padding: 11px 0 10px 46px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  column-gap: 8px;
  align-items: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    margin: auto;
    position: absolute;
    left: 23px;
    top: 0;
    bottom: 0;
    transition: background-color 0.2s ease-out;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${(props) => props.theme.colorButton};
          `
        : css`
            background-color: transparent;
          `}
    border-radius: 50%;
    outline: 1px solid ${(props) => props.theme.colorButton};
    outline-offset: 2px;
  }
`;

export const AccordionText = styled.div`
  font-size: 14px;
  line-height: 150%;

  & ul {
    margin: 0;
    margin-left: 16px;
    padding: 0;
    list-style-type: disc;
  }
`;
