import React, { useState, useEffect } from "react";
import "./style.css";

import { SLIDER_IMG } from "../../../../data";

const Slider = () => {

    const [slides, setSlides] = useState(SLIDER_IMG);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
    }, [index, slides]);


    useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => clearInterval(slider);
      }, [index]);

    return <div className="hero-slider">
        <div className="hero-slider-container">

            <div className="hero-slider-images">
                {slides.map((slide, slideIndex) => {
                    let position = "nextSlide";
                    if (slideIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        slideIndex === index - 1 ||
                        (index === 0 && slideIndex === slides.length - 1)
                    ) {
                        position = "lastSlide";
                    }

                    return (
                        <article key={slide.id} className={position}> 
                            <div className="hero-slider-images">
                                <img src={slide.image} alt={slide.title}/>
                            </div>
                            <div className="hero-slider-caption">
                                <div className="slider-details">  
                                    <h1>{slide.title}</h1>
                                    <p>{slide.desc}</p>
                                    <button>{slide.btn}</button>
                                </div>
                            </div>    
                        </article>
                        );
                })}
            </div>
            

            {/* <div className="hero-slider-images">
                <img src={carousel1} alt="Men Fashion" />
            </div>
            <div className="hero-slider-caption">
                <div className="slider-details">
                    <h1>Men Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="hero-slider-images">
                <img src={carousel2} alt="Women Fashion" />
            </div>
            <div className="hero-slider-caption">
                <div className="slider-details">
                    <h1>Women Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="hero-slider-images">
                <img src={carousel3} alt="KIds Fashion" />
            </div>
            <div className="hero-slider-caption">
                <div className="slider-details">
                    <h1>Kids Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
            </div> */}
        </div>
        <div className="hero-slider-controls">
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
}

export default Slider