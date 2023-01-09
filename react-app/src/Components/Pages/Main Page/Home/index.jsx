import React from "react";
import { useState } from "react";
import "./style.css";

import Categories from "../Categories";
import FeaturedProducts from "../Featured Products";
import Header from "../Header";
import Slider from "../Slider";
import Benefits from "../Benefits";

import cat1 from "./../../../../assets/images/cat-1.jpg";
import cat2 from "./../../../../assets/images/cat-2.jpg";
import cat3 from "./../../../../assets/images/cat-3.jpg";
import cat4 from "./../../../../assets/images/cat-4.jpg";



import product1 from "./../../../../assets/images/product-1.jpg";
import product2 from "./../../../../assets/images/product-2.jpg";
import product3 from "./../../../../assets/images/product-3.jpg";
import product4 from "./../../../../assets/images/product-4.jpg";
import product5 from "./../../../../assets/images/product-5.jpg";
import product6 from "./../../../../assets/images/product-6.jpg";
import product7 from "./../../../../assets/images/product-7.jpg";
import product8 from "./../../../../assets/images/product-8.jpg";

import offer1 from "../../../../assets/images/offer-1.jpg";
import offer2 from "../../../../assets/images/offer-2.jpg";



import {FaCheck} from "react-icons/fa";
import {FaShippingFast} from "react-icons/fa";
import {FaExchangeAlt} from "react-icons/fa";
import {FaPhoneVolume} from "react-icons/fa";
import SpecialOffer from "../Special Offer";


const Home = () => {
    
    const [benefits, setBenefits] = useState([
        {
            icon: <FaCheck />,
            benefit: "Quality Product"
        },
        {
            icon: <FaShippingFast />,
            benefit: "Free Shipping"
        },
        {
            icon: <FaExchangeAlt />,
            benefit: "14-Day Return"
        },
        {
            icon: <FaPhoneVolume />,
            benefit: "24/7 Support"
        }
    ])



    const [category, setCategory] = useState([
        {
            link: "https://www.facebook.com/",
            img: cat1,
            title: "Category Name",
            desc: "100 Products",
        }, 
        {
            link: "https://www.facebook.com/",
            img: cat2,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat3,
            title: "Category Name",
            desc: "100 Products",
            },
        {
            link: "https://www.facebook.com/",
            img: cat4,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat4,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat3,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat2,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat1,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat2,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat1,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat4,
            title: "Category Name",
            desc: "100 Products",
        },
        {
            link: "https://www.facebook.com/",
            img: cat3,
            title: "Category Name",
            desc: "100 Products",
        }
    ])


    const [featuredProducts, setFeaturedProducts] = useState([
        {
            img: product1,
            title: "Product Name Goes Here",
            old_price: "130.00",
            product_star: 5,
            product_reviews: "(99)",
        },
        {
            img: product2,
            title: "Product Name Goes Here",
            old_price: "150.00",
            product_star: 4.5,
            product_reviews: "(99)",
        },
        {
            img: product3,
            title: "Product Name Goes Here",
            old_price: "125.00",
            product_star: 3.5,
            product_reviews: "(99)",
        },
        {
            img: product4,
            title: "Product Name Goes Here",
            old_price: "200.00",
            product_star: 3,
            product_reviews: "(99)",
        },
        {
            img: product5,
            title: "Product Name Goes Here",
            old_price: "190.00",
            product_star: 5,
            product_reviews: "(99)",
        },
        {
            img: product6,
            title: "Product Name Goes Here",
            old_price: "177.00",
            product_star: 4.5,
            product_reviews: "(99)",
        },
        {
            img: product7,
            title: "Product Name Goes Here",
            old_price: "100.00",
            product_star: 3.5,
            product_reviews: "(99)",
        },
        {
            img: product8,
            title: "Product Name Goes Here",
            old_price: "250.00",
            product_star: 3,
            product_reviews: "(99)",
        }])

    return <div className="container">
        <div className="wrapper">
            <div className="slider-section">
                <div className="slider-container">
                    <Slider />
                </div>
                <div className="spec-offer-container">
                    <div className="spec-offer-wrapper">
                        <SpecialOffer img = {offer1} discount="Save 20%" title="Special Offer" btn="Shop Now"/>
                        <SpecialOffer img = {offer2} discount="Save 20%" title="Special Offer" btn="Shop Now"/>
                    </div>
                    
                </div>
            </div>
            <div className="benefits-section">
                    {benefits.map((elem, index) => {
                        return <Benefits 
                        key = {index}
                        icon = {elem.icon}
                        benefit = {elem.benefit}
                        />
                    })}
            </div>
            <div className="hero-section">
                <h2 className="hero-section-title">
                    <span>Categories</span>
                </h2>
                <div className="cat-section-boxes">
                    {category.map((elem, index) => {
                        return <Categories 
                        key = {index}
                        cat_link = {elem.link}
                        cat_img = {elem.img}
                        cat_title = {elem.title}
                        cat_desc = {elem.desc}  
                        />
                    })}
                </div>
            </div>
            <div className="hero-section">
                <h2 className="hero-section-title">
                        <span>Featured Products</span>
                    </h2>
                    <div className="featurd-prod-sect-boxes">
                        {featuredProducts.map((elem, index) => {
                            return <FeaturedProducts 
                            key ={index}
                            product_img = {elem.img}
                            product_title = {elem.title}
                            old_price = {elem.old_price}
                            new_price = {elem.new_price}
                            product_star = {elem.product_star}
                            product_reviews = {elem.product_reviews}
                            />
                        })}
                    </div>
            </div>
            <div className="hero-section">
                <div className="special-offer-boxes">
                    <div className="special-offer-box2">
                        <SpecialOffer img = {offer1} discount="Save 20%" title="Special Offer" btn="Shop Now"/>
                    </div>
                    <div className="special-offer-box2">
                        <SpecialOffer img = {offer2} discount="Save 20%" title="Special Offer" btn="Shop Now"/>
                    </div>
                </div>
            </div>
            <div className="hero-section">
                <h2 className="hero-section-title">
                        <span>Recent Products</span>
                    </h2>
                    <div className="featurd-prod-sect-boxes">
                        {featuredProducts.map((elem, index) => {
                            return <FeaturedProducts 
                            key ={index}
                            product_img = {elem.img}
                            product_title = {elem.title}
                            old_price = {elem.old_price}
                            new_price = {elem.new_price}
                            product_star = {elem.product_star}
                            product_reviews = {elem.product_reviews}
                            />
                        })}
                    </div>
            </div>
    </div>      
</div>

}

export default Home