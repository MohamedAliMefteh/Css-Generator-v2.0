import React from "react";
import Input from "../../../Components/Input";
import { updateValue } from "../../../Redux/Slices/shadowSlice";
import { useDispatch, useSelector } from "react-redux";
import handleChange from "../../../Utils/handleChange";

const ShadowSetting = () => {
  const { value } = useSelector((state) => state.shadow);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    handleChange(e, updateValue, dispatch);
  };
  return (
    <div className="shadowsettings">
      <div className="dimensions container">
        <h3>Dimensions:</h3>
        <Input
          title={"Horizontal"}
          classname={"horizontal"}
          type={"range"}
          value={value}
          dataref={"horizontal"}
          min={-200}
          max={200}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Vertical"}
          classname={"vertical"}
          type={"range"}
          value={value}
          dataref={"vertical"}
          min={-200}
          max={200}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="blur container">
        <h3>Blur:</h3>
        <Input
          title={"Blur Radius"}
          classname={"blurradius"}
          type={"range"}
          value={value}
          dataref={"blurRadius"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Spread Radius"}
          classname={"spreadradius"}
          type={"range"}
          value={value}
          dataref={"spreadRadius"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="opacity container">
        <h3>Visibility:</h3>
        <Input
          title={"Opacity"}
          classname={"opacity"}
          type={"range"}
          value={value}
          dataref={"shadowOpacity"}
          min={0}
          max={1}
          step={0.01}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="colors container">
        <h3>Colors:</h3>
        <Input
          title={"Shadow Color"}
          classname={"shadowcolor"}
          type={"color"}
          value={value}
          dataref={"shadowColor"}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Box Color"}
          classname={"boxcolor"}
          type={"color"}
          value={value}
          dataref={"boxColor"}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default ShadowSetting;
