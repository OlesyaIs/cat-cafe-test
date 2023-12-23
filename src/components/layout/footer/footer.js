import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, Copyright } from "./styles";
import { AppRoute } from "/src/routs";

function Footer() {
  return (
    <StyledFooter>
      <Logo link={AppRoute.MAIN} />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}

export default Footer;
