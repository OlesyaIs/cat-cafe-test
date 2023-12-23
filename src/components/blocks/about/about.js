import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Address from "/src/components/ui/address/address";
import { StyledSection, TextWrapper, Paragraph, WorkTime } from "./styles";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title
          size={TitleSize.BIG}
          className="about__title"
          level={TitleLevel.H1}
        >
          Первое в России котокафе
        </Title>
        <Paragraph>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Paragraph>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address className="about__address">
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
