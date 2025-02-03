import React from "react";
import { useSelector } from "react-redux";

const PreviewButton = () => {
  const { value } = useSelector((state) => state.button);

  return (
    <div className="previewbutton">
      <button
        style={{
          height: `${value.height}px`,
          width: `${value.width}px`,
          borderRadius: `${value.borderRadius}px `,
          borderWidth: `${value.borderWidth}px `,
          borderStyle: value.borderStyle,
          borderColor: value.borderColor,
          backgroundColor: value.backgroundColor,
          cursor: value.cursor,
        }}
      >
        {value.content}
      </button>
    </div>
  );
};

export default PreviewButton;
