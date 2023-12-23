import React from "react";
import { Li } from "/src/components/elements";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, StyledUl } from "./styles";

function Stars({ starsData }) {
  return (
    <StyledSection>
      {starsData.length ? (
        <>
          <Title size={TitleSize.DEFAULT} level={TitleLevel.H2}>
            Наши звезды
          </Title>
          <StyledUl>
            {starsData.map((star) => (
              <Li key={star.id}>
                <StarCard titleLevel={TitleLevel.H3} {...star} />
              </Li>
            ))}
          </StyledUl>
          <Button minWidth={353} link="/buy">
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default Stars;
