import styled from "styled-components";
import { ReactComponent as LeftArrow } from "/src/assets/icons/leftArrow.svg";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colorBlackForText};
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
`;

export const Arrow = styled(LeftArrow)`
  transform: rotate(${(props) => (props.open ? "90deg" : "-90deg")}) scale(0.7);
  transition: transform 0.2s ease-out;
`;

export const TitleWrapper = styled.div`
  min-height: 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`;
export const ContentWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  position: absolute;
  bottom: 0;
`;
export const Wrapper = styled.div`
  height: ${(props) => `${props.open ? props.height : 0}px`};
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

export const AccordionItemWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorGray};
  border-radius: 10px;
  overflow: hidden;
`;
