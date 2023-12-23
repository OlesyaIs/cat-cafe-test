import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Button } from "/src/components/ui/button/button";
import { ReactComponent as LeftArrow } from "/src/assets/icons/leftArrow.svg";

export const StyledButtonLeft = styled(Button)`
  margin: auto;
  padding: 0;
  width: 64px;
  height: 64px;
  position: absolute;
  left: -94px;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    box-shadow: none;
  }

  &:disabled {
    opacity: 80%;
    cursor: auto;
    &:hover {
      background-color: ${(props) => props.theme.colorButton};
    }
  }
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  left: auto;
  right: -94px;
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;

export const StyledSlide = styled.img`
  border-radius: 20px;
  width: 726px;
  height: auto;
`;

export const StyledSlideMini = styled.div`
  width: 167px;
  height: 128px;
  background-image: url("${(props) => props.src}");
  position: relative;
  filter: brightness(50%);
  background-size: cover;
  border-radius: 12px;
  cursor: pointer;
`;

export const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const StyledSwiperMini = styled(Swiper)`
  width: 726px;
  height: 128px;

  .swiper-slide-thumb-active ${StyledSlideMini} {
    filter: brightness(100%);
  }
`;

export const SwiperWrapper = styled.div`
  margin: 0 auto;
  width: 726px;
  position: relative;
`;
