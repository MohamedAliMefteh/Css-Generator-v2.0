import React from "react";
import Input from "../../../Components/Input";
import { useSelector, useDispatch } from "react-redux";
import { updateValue } from "../../../Redux/Slices/buttonSlice";
import handleChange from "../../../Utils/handleChange";

const ButtonSettings = () => {
  const { value } = useSelector((state) => state.button);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    handleChange(e, updateValue, dispatch);
  };
  return (
    <div className="buttonsettings">
      <div className="text container">
        <h3>Content:</h3>
        <Input
          title={"Text"}
          classname={"text"}
          type={"text"}
          value={value}
          dataref={"content"}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="dimensions container">
        <h3>Dimensions:</h3>
        <Input
          title={"Height"}
          classname={"height"}
          type={"range"}
          value={value}
          dataref={"height"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Width"}
          classname={"width"}
          type={"range"}
          value={value}
          dataref={"width"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="border container">
        <h3>Border:</h3>
        <Input
          title={"Border Radius"}
          classname={"borderradius"}
          type={"range"}
          value={value}
          dataref={"borderRadius"}
          min={0}
          max={250}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Border Width"}
          classname={"borderwidth"}
          type={"range"}
          value={value}
          dataref={"borderWidth"}
          min={0}
          max={100}
          onChangeHandler={onChangeHandler}
        />
        <div className="borderstyle params">
          <h4>Border Style</h4>
          <select
            dataref="borderStyle"
            value={value.borderStyle}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
        <Input
          title={"Border Color"}
          classname={"bordercolor"}
          type={"color"}
          value={value}
          dataref={"borderColor"}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="background container">
        <Input
          title={"Background Color"}
          classname={"backgroundcolor"}
          type={"color"}
          value={value}
          dataref={"backgroundColor"}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="cursor container">
        <div className="cursor params">
          <h4>Cursor Type</h4>
          <select
            dataref="cursor"
            value={value.cursor}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="auto">auto</option>
            <option value="pointer">pointer</option>
            <option value="crosshair">crosshair</option>
            <option value="progress">progress</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ButtonSettings;
