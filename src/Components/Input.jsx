import React from "react";

const Input = (props) => {
  return (
    <div className={`${props.classname || ""} params `}>
      <h5>{props.title}</h5>
      <input
        className="maininput"
        type={props.type}
        name={props.name ? props.name : null}
        value={props.dataref ? props.value[props.dataref] : props.radioChoice}
        dataref={props.dataref}
        min={props.min ? props.min : null}
        max={props.max ? props.max : null}
        step={props.step ? props.step : null}
        onChange={(e) => props.onChangeHandler(e)}
      />
      {props.type === "range" && (
        <input
          type="number"
          value={props.value[props.dataref]}
          min={props.min ? props.min : null}
          max={props.max ? props.max : null}
          dataref={props.dataref}
          className="secondaryinput"
          onChange={(e) => props.onChangeHandler(e)}
        />
      )}
    </div>
  );
};

export default Input;
