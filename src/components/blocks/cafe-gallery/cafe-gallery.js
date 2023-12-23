import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "./styles";
import Gallery from "../../ui/gallery/gallery";

function CafeGallery({ galleryData }) {
  return galleryData.length ? (
    <StyledSection>
      <StyledTitle size={TitleSize.BIG} level={TitleLevel.H2}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={galleryData} />
    </StyledSection>
  ) : null;
}

export default CafeGallery;
