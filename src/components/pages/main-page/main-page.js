import React from "react";
import About from "/src/components/blocks/about/about";
import Stars from "/src/components/blocks/stars/stars";

function MainPage({stars}) {
  return (
    <>
      <About />
      <Stars starsData={stars}/>
    </>
  );
}

export default MainPage;
