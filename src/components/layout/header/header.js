import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles";
import { AppRoute } from "/src/routs";

function Header() {
  return (
    <StyledHeader>
      <Logo link={AppRoute.MAIN} />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
