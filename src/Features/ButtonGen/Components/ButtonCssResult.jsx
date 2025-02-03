import React from "react";
import { useSelector } from "react-redux";
import convertToCSS from "../Utils/convertToCss";

const ButtonCssResult = () => {
  const { value } = useSelector((state) => state.button);
  const style = convertToCSS(value);
  return (
    <div className="buttoncssresult">
      <pre>
        <code>{style}</code>
      </pre>
    </div>
  );
};

export default ButtonCssResult;
