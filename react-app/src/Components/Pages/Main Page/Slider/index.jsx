import React from "react";
import "./style.css";
import carousel1 from "../../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../../assets/images/carousel-3.jpg";

const Slider = () => {

    return <div className="hero-slider">
        <div className="hero-slider-container">
            <div className="hero-slider-images">
                <img src={carousel1} alt="Men Fashion" />
            </div>
            <div className="hero-slider-caption">
                <div className="slider-details">
                    <h1>Men Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>

    </div>
}

export default Slider