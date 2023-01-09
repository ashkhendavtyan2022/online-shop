import React from "react";
import "./style.css";

const CheckboxPrice = (props) => {
  const { valueMax, isChecked, handleChange } = props;

  return (
    <div className="checkbox-items">
      <div className="input-box">
        <input
          type="checkbox"
          id={props.name}
          name={props.label}
          onChange={handleChange}
          value={valueMax}
          checked={isChecked === props.label}
        />
        <label for={props.name}>{props.label}</label>
      </div>
      <div>{props.quantity}</div>
    </div>
  );
};

export default CheckboxPrice;
