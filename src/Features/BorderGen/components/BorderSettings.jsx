import React from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import handleChange from "../../../Utils/handleChange";
import { updateValue } from "../../../Redux/Slices/borderSlice";

const BorderSettings = () => {
    const {value}=useSelector(state=>state.border)
    const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    handleChange(e, updateValue, dispatch);
  };
  return (
    <div className="bordersettings">
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
        <h3>Borders:</h3>
        <Input
          title={"Top Left Border"}
          classname={"topleftborder"}
          type={"range"}
          value={value}
          dataref={"topLeftBorder"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Top Right Border"}
          classname={"toprightborder"}
          type={"range"}
          value={value}
          dataref={"topRightBorder"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Bottom Right Border"}
          classname={"bottomrightborder"}
          type={"range"}
          value={value}
          dataref={"bottomRightBorder"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"Bottom Left Border"}
          classname={"bottomleftborder"}
          type={"range"}
          value={value}
          dataref={"bottomLeftBorder"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
        <Input
          title={"All Borders"}
          classname={"allborders"}
          type={"range"}
          value={value}
          dataref={"allBorders"}
          min={0}
          max={500}
          onChangeHandler={onChangeHandler}
        />
      </div>

    </div>
  );
};

export default BorderSettings;
