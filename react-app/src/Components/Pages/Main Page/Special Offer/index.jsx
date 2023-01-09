import React from "react";
import "./style.css";

const SpecialOffer = (props) => {

    return <div className="special-offer-box">
        <img className="special-offer-img" src={props.img} alt="special offer" />
        <div className="offer-caption">
            <p>{props.discount}</p>
            <h3>{props.title}</h3>
            <button type="button">{props.btn}</button>
        </div>
    </div>
}

export default SpecialOffer