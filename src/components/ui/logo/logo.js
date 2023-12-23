import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, Text } from "./styles";
import { useLocation } from "react-router-dom";

function Logo({ link }) {
  const pageUrl = useLocation().pathname;
  return (
    <StyledLogo {...(link && link !== pageUrl ? { to: link } : { as: "span" })}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
