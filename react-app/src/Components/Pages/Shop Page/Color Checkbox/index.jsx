import React from "react";
import "./style.css";

const CheckboxColor = (props) => {
    const {isChecked, handleColorChange } = props;
  
    return (
      <div className="checkbox-items">
        <div className="input-box">
          <input
            type="checkbox"
            id={props.name}
            name={props.label}
            onChange={handleColorChange}
            checked={isChecked === props.label}
            value = {props.label}
          />
          <label for={props.name}>{props.label}</label>
        </div>
        <div>{props.quantity}</div>
      </div>
    );
  };
  
  export default CheckboxColor;