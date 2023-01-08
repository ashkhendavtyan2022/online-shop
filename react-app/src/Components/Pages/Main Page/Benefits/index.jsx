import React from "react";
import "./style.css";

const Benefits = ({icon, benefit}) => {

    return <div className="benefit-container">
        <div className="benefit-wrapper">
            <div className="benefit-icon">{icon}</div>
            <h5 className="benefit-title">{benefit}</h5>
        </div>
    </div>
}

export default Benefits