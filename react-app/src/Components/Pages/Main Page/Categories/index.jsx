import React from "react";
import "./style.css";


const Categories = (props) => {
    const cat_img = props.cat_img;
    const cat_title = props.cat_title;
    const cat_desc = props.cat_desc;
    const cat_link = props.cat_link;


    return <div className="cat-boxes">
        <a href={cat_link}>
            <div className="cat-box">
                <div className="img-div">
                    <img src={cat_img} alt="nkar" />
                </div>
                <div className="cat-details">
                    <div>
                        <h6>{cat_title}</h6>
                        <p>{cat_desc}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
}

export default Categories