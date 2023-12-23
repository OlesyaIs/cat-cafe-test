import React from "react";
import { Image, Paragraph } from "/src/components/elements";
import Title, { TitleSize } from "/src/components/ui/title/title";
import StarFeature from "/src/components/ui/star-feature/star-feature";
import { StyledArticle, StyledFigure, StyledFeature } from "./styles";

function StarCard({ image, name, feature, about, titleLevel }) {
  return (
    <StyledArticle>
      <StyledFigure>
        <Image src={image} width="313" height="313" alt="" />
        <StyledFeature feature={feature} />
      </StyledFigure>
      <Title level={titleLevel} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Paragraph dangerouslySetInnerHTML={{ __html: about }} />
    </StyledArticle>
  );
}

export default StarCard;
