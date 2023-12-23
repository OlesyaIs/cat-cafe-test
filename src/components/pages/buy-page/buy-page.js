import React from "react";
import CafeGallery from "/src/components/blocks/cafe-gallery/cafe-gallery";
import Buy from "/src/components/blocks/buy/buy";

function BuyPage({ images, buyOptions }) {
  return (
    <div>
      <CafeGallery galleryData={images}></CafeGallery>
      <Buy buyOptions={buyOptions}></Buy>
    </div>
  );
}

export default BuyPage;
