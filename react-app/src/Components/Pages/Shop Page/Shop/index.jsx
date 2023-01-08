import React from "react";
import "./style.css";

import FeaturedProducts from "../../Main Page/Featured Products";
import { useState } from "react";

import product1 from "./../../../../assets/images/product-1.jpg";
import product2 from "./../../../../assets/images/product-2.jpg";
import product3 from "./../../../../assets/images/product-3.jpg";
import product4 from "./../../../../assets/images/product-4.jpg";
import product5 from "./../../../../assets/images/product-5.jpg";
import product6 from "./../../../../assets/images/product-6.jpg";
import product7 from "./../../../../assets/images/product-7.jpg";
import product8 from "./../../../../assets/images/product-8.jpg";
import product9 from "./../../../../assets/images/product-9.jpg";
import CheckBox from "../CheckBox";


const Shop = () => {
    const [products, setProducts] = useState([
        {
            img: product1,
            title: "Product Name Goes Here",
            old_price: "99.00",
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
            old_price: "220.00",
            product_star: 3,
            product_reviews: "(99)",
        },
        {
            img: product5,
            title: "Product Name Goes Here",
            old_price: "390.00",
            product_star: 5,
            product_reviews: "(99)",
        },
        {
            img: product6,
            title: "Product Name Goes Here",
            old_price: "450.00",
            product_star: 4.5,
            product_reviews: "(99)",
        },
        {
            img: product7,
            title: "Product Name Goes Here",
            old_price: "210.00",
            product_star: 3.5,
            product_reviews: "(99)",
        },
        {
            img: product8,
            title: "Product Name Goes Here",
            old_price: "80.00",
            product_star: 3,
            product_reviews: "(99)",
        },
        {
            img: product9,
            title: "Product Name Goes Here",
            old_price: "250.00",
            product_star: 3,
            product_reviews: "(99)",
        },
    ])

    const [filterPrice, setFilterPrice] = useState([
        {
            name: "all",
            label: "All Price",
            quantity: 1000,
        },
        {
            name: 100,
            label: "$0-$100",
            quantity: 150,
        },
        {
            name: 200,
            label: "$100-$200",
            quantity: 295,
        },
        {
            name: 300,
            label: "$200-$300",
            quantity: 246,
        },
        {
            name: 400,
            label: "$300-$400",
            quantity: 145,
        },
        {
            name: 500,
            label: "$400-$500",
            quantity: 168,
        },
    ])
    
    return <div className="container">
        <div className="wrapper">
            <div className="shop-section">
                <div className="shop-filters">
                    <div className="price-filter">
                        {filterPrice.map((elem, index) =>{
                            return <CheckBox 
                            key ={index}
                            name = {elem.name}
                            label = {elem.label}
                            quantity = {elem.quantity}
                            />
                        })}
                    </div>
                </div>
                <div className="products-boxes">
                {products.map((elem, index) => {
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

export default Shop