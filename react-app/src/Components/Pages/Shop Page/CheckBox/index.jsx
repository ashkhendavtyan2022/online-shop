import React from "react";
import "./style.css";

const CheckBox = (props) => {

    return <div>
        <input type="checkbox" name={props.name}/>
        <label for={props.name}>{props.label}</label>
        <span>{props.quantity}</span>
    </div>
}

export default CheckBox