import React from "react";
import { useSelector } from "react-redux";
import hexToRgba from "../../../Utils/hexToRgba";

const PreviewShadow = () => {
  const { value } = useSelector((state) => state.shadow);
  const shadowcolor = hexToRgba(value.shadowColor, value.shadowOpacity);
  const style = {
    height: "200px",
    width: "200px",
    backgroundColor: value.boxColor,
    boxShadow: `${value.horizontal}px ${value.vertical}px ${value.blurRadius}px ${value.spreadRadius}px ${shadowcolor}`,
  };
  return (
    <div className="previewshadow" style={{backgroundColor:`${value.backgroundColor}`}}>
      <div style={style}></div>
    </div>
  );
};

export default PreviewShadow;
