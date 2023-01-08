import React from "react";
import "./style.css";

import {FaStar} from "react-icons/fa";
import {FaStarHalfAlt} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";

import {FaShoppingCart} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {FaSyncAlt} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";


const FeaturedProducts =(props) => {

    const stars = [];

    if(props.product_star == 0) {
        stars.push(<div key={0}>
            <span><FaRegStar /></span>  
            <span><FaRegStar /></span>
            <span><FaRegStar /></span>
            <span><FaRegStar /></span>
            <span><FaRegStar /></span>
        </div>);
    }

    for(let i = 1; i <= props.product_star; i++) {
        stars.push(<span><FaStar /></span>);
        if(i === Math.floor(props.product_star)) {
            let j = i;
            if(props.product_star - i !== 0) {
                stars.push(<span><FaStarHalfAlt /></span>);
                j++;
            }
            for(j; j < 5; j++) {
                stars.push(<span><FaRegStar /></span>);
            }
        }
    }

    const new_price = [];

    if(props.old_price >= 150) {
        new_price.push("$" + (+props.old_price - (+props.old_price * 15) / 100).toFixed(2))

    }


    return <div className="product-boxes">
        <div className="product-img-div">
            <img src={props.product_img} alt="nkar" />
            <div className="prod-hover-btns">
                <div>
                    <span className="hover-btn"><FaShoppingCart /></span>
                    <span className="hover-btn"><FaRegHeart /></span>
                    <span className="hover-btn"><FaSyncAlt /></span>
                    <span className="hover-btn"><FaSearch /></span>
                </div>
               
            </div>
        </div>
        <div className="product-details">
                <div>
                    <a href="" className="product-title">{props.product_title}</a>
                    <div className="product-prices">
                        <span className="new-price">{new_price}</span>
                        <span className={`${+props.old_price >= 150 ? 'del-old-price' : 'product-old-price' }`}>${props.old_price}</span>
                    </div>
                    <div className="product-review">  
                        <span className="review-star">{stars}</span>
                        <span className="product-reviews">{props.product_reviews}</span>
                    </div>
                        
                </div>
        </div>
    </div>
}

export default FeaturedProducts