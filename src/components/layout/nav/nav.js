import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/routs";
import { StyledButton, StyledUl } from "./styled";
import { useLocation } from "react-router-dom";
import { Li } from "/src/components/elements";

const navButtons = [
  {
    to: AppRoute.MAIN,
    button: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <StyledUl>
        {navButtons &&
          navButtons.length &&
          navButtons
            .filter((button) => button.to !== pageUrl)
            .map((button) => <Li key={button.to}>{button.button}</Li>)}
      </StyledUl>
    </nav>
  );
}

export default Nav;
