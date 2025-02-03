import React from "react";
import ButtonSettings from "./Components/ButtonSettings";
import "./buttongen.css";
import PreviewButton from "./Components/PreviewButton";
import ButtonCssResult from "./Components/ButtonCssResult";

const ButtonGen = () => {
  return (
    <div className="buttongen">
      <ButtonSettings />
      <PreviewButton />
      <ButtonCssResult />
    </div>
  );
};

export default ButtonGen;
