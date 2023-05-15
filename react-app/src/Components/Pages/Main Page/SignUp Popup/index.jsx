import React from "react";
import "./style.css";


export const SignUp = ({onClick}) => {

    return <div className="signup-main" >
        <div className="overlay" onClick={onClick}></div>
        <div className="signup">
            <div className="signup-title">
                <h2>Sign Up</h2>
                <div onClick={onClick}>X</div>
            </div>
            <div className="signup-body">
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstname" />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastname" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>

                <button className="signup-btn">Sign Up</button>
            </div>
        </div>

    </div>
}