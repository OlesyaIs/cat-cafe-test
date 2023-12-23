import React from "react";

import styled from "styled-components";
import mapMark from "/src/assets/map-mark.svg";

const Address = styled.address.attrs((props) => ({
  children: props.children,
}))`
  position: relative;
  padding-left: 24px;
  font-style: normal;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${mapMark});
  }
`;

export default Address;
