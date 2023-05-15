import React from "react";
import "./style.css";


export const SignIn = ({onClick, toSignUp}) => {

    return <div className="signup-main" >
        <div className="overlay" onClick={onClick}></div>
        <div className="signup">
            <div className="signup-title">
                <h2>Sign In</h2>
                <div onClick={onClick}>X</div>
            </div>
            <div className="signup-body">
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="manage-btn">
                    <button className="signup-btn">Sign In</button>
                    <p onClick={toSignUp}>Sign Up</p>
                </div>
                
            </div>
        </div>
    </div>
}