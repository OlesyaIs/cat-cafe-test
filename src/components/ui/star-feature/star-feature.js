import React from "react";
import { Feature } from "./styles";

const CatFeature = {
  NEW: "new",
  SOFT: "soft"
};

function StarFeature({ feature, className }) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: "New",
        bgColor: "#ffb334"
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: "Ласковый",
        bgColor: "#7fc92e"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#555"
      };
      break;
  }

  return options.text ? (
    <Feature $backgroundColor={options.bgColor} className={className}>
      {options.text}
    </Feature>
  ) : null;
}

export default StarFeature;
