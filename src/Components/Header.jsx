import React, { useState } from "react";

const Header = () => {
  const [value,setValue]=useState(0)
  const handleClick = () => {
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-color")
      .trim();
    const secondary = getComputedStyle(document.documentElement)
      .getPropertyValue("--secondary-color")
      .trim();
    document.documentElement.style.setProperty("--primary-color", secondary);
    document.documentElement.style.setProperty("--secondary-color", primary);
    if(value===0){
      setValue(1)
    }
    else{
      setValue(0)
    }
  };
  return (
    <header className="navbar">
      Css Generator
      <input
        className="switch"
        type="range"
        min={0}
        max={1}
        value={value}
        onChange={() => handleClick()}
      />
    </header>
  );
};

export default Header;
