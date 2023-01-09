import React from "react";
import "./style.css";

import FeaturedProducts from "../../Main Page/Featured Products";
import { useState } from "react";

import CheckboxPrice from "../Price Checkbox";
import { SHOP_ITEMS } from "../../../../data";

import CheckboxColor from "../Color Checkbox";

const Shop = () => {
  const [products, setProducts] = useState(SHOP_ITEMS);
  const [isPriceChecked, setIsPriceChecked] = useState("All Price");
  const [isColorChecked, setIsColorChecked] = useState("All Color");


  const [filterPrice, setFilterPrice] = useState([
    {
      name: "all",
      label: "All Price",
      quantity: 1000,
      valueMax: Infinity,
    },
    {
      name: 100,
      label: "$0-$100",
      quantity: 150,
      valueMax: 100,
    },
    {
      name: 200,
      label: "$100-$200",
      quantity: 295,
      valueMax: 200,
    },
    {
      name: 300,
      label: "$200-$300",
      quantity: 246,
      valueMax: 300,
    },
    {
      name: 400,
      label: "$300-$400",
      quantity: 145,
      valueMax: 400,
    },
    {
      name: 500,
      label: "$400-$500",
      quantity: 168,
      valueMax: 500,
    },
  ]);

  const handlePriceClick = (e) => {
    //This function will change selected filter
    const { value, name } = e.target;
    setIsPriceChecked(name);

    if (name === "All Price") {
      setProducts(SHOP_ITEMS);
    } else {
      const filteredItems = SHOP_ITEMS.filter(
        (item) =>
          parseFloat(item.old_price) <= value &&
          parseFloat(item.old_price) >= value - 100
      );

      setProducts(filteredItems);
    }
  };

  const [filterColor, setFilterColor] = useState([
    {
        name: "all",
        label: "All Color",
        quantity: 1000, 
    },
    {
        name: "black",
        label: "Black",
        quantity: 150, 
    },
    {
        name: "white",
        label: "White",
        quantity: 295, 
    },
    {
        name: "red",
        label: "Red",
        quantity: 246, 
    },
    {
        name: "blue",
        label: "Blue",
        quantity: 145, 
    },
    {
        name: "green",
        label: "Green",
        quantity: 168, 
    }
  ])

  const handleColorClick = (e) => {
    //This function will change selected filter
    const { value, name } = e.target;
    setIsColorChecked(name);

    if (name === "All Color") {
      setProducts(SHOP_ITEMS);
    } else {
      const filteredColorItems = SHOP_ITEMS.filter(
        (item) =>
          item.color == value
      );

      setProducts(filteredColorItems);


    }
  };


  return (
    <div className="container">
      <div className="wrapper">
        <div className="shop-section">
          <div className="shop-filters">
            <div className="price-filter">
              {filterPrice.map((elem, index) => {
                return (
                  <CheckboxPrice
                    handleChange={handlePriceClick}
                    key={index}
                    name={elem.name}
                    label={elem.label}
                    valueMax={elem.valueMax}
                    quantity={elem.quantity}
                    isChecked={isPriceChecked}
                  />
                );
              })}
            </div>
            <div className="price-filter">
              {filterColor.map((elem, index) => {
                return (
                  <CheckboxColor
                    handleChange={handleColorClick}
                    key={index}
                    name={elem.name}
                    label={elem.label}
                    quantity={elem.quantity}
                    isChecked={isColorChecked}
                  />
                );
              })}
            </div>
          </div>
          <div className="products-boxes">
            {products.map((elem, index) => {
              return (
                <FeaturedProducts
                  key={index}
                  product_img={elem.img}
                  product_title={elem.title}
                  old_price={elem.old_price}
                  new_price={elem.new_price}
                  product_star={elem.product_star}
                  product_reviews={elem.product_reviews}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
