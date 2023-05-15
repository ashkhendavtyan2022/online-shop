import React from "react";
import "./style.css";
import {FaCaretDown } from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../../Context";
import {SignUp} from "../SignUp Popup/index";
import { SignIn } from "../SignIn Popup/index";


const Header = () => {
    const [dropdownAccount, setDropdownAccount] = useState(false);
    const [dropdownCurrency, setDropdownCurrency] = useState(false);
    const [dropdownLanguage, setDropdownLanguage] = useState(false);

    const handleDropdownAccount = (e) => {
        setDropdownAccount(!dropdownAccount) 
        if(dropdownCurrency) {
            setDropdownCurrency(!dropdownCurrency)
        }

        if(dropdownLanguage) {
            setDropdownLanguage(!dropdownLanguage)
        }
        // setState({[e]: Object.e})
    };

    const handleDropdownCurrency = () => {
        setDropdownCurrency(!dropdownCurrency) 

        if(dropdownAccount) {
            setDropdownAccount(!dropdownAccount)
        }

        if(dropdownLanguage) {
            setDropdownLanguage(!dropdownLanguage)
        }
    };

    const handleDropdownLanguage = () => {
        setDropdownLanguage(!dropdownLanguage)

        if(dropdownAccount) {
            setDropdownAccount(!dropdownAccount)
        }

        if(dropdownCurrency) {
            setDropdownCurrency(!dropdownCurrency)
        }
    };
    
    const [categoryItems, setcategoryItems] = useState(false);

    const handleCategory = () => {
        setcategoryItems(!categoryItems)
    };


    const {activeSignup, setActiveSignup} = useGlobalContext();
    const openSignUp = () => {
        setActiveSignup({signup : !activeSignup.signup})
    }

    const openSignIn = () => {
        setActiveSignup({signin : !activeSignup.signin})
    }

    if(activeSignup.signin || activeSignup.signup) {
        document.body.classList.add('active-popup')
      } else {
        document.body.classList.remove('active-popup')
      }

    const toSignup = () => {
        
    }


    return <div className="hero-container">
        {activeSignup.signin ? <SignIn onClick={openSignIn}/> : null }
        {activeSignup.signup ? <SignUp onClick={openSignUp}/> : null }
        {console.log(activeSignup)}
        <div className="header-row1">
            <div className="hero-header-row">
                <ul className="header-col header-col1">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>FAQs</li>
                </ul>
                <ul className="header-col header-col2">
                    <li onClick={handleDropdownAccount}>
                            My Account 
                            <FaCaretDown className="dropdown-icon"/>
                            {dropdownAccount ? (
                                <ul className="header-col2-dropdown">
                                    <li onClick={openSignIn} toSignup={toSignup}>Sign In</li>
                                    <li onClick={openSignUp}>Sign Up</li>
                                </ul>) : null}
                    </li>
                    <li onClick={handleDropdownCurrency}>
                        USD 
                        <FaCaretDown className="dropdown-icon"/>
                        {dropdownCurrency ? (
                            <ul className="header-col2-dropdown">
                                <li>EUR</li>
                                <li>GBP</li>
                                <li>CAD</li>
                            </ul>) : null}
                    </li>
                    <li onClick={handleDropdownLanguage}>
                        EN 
                        <FaCaretDown className="dropdown-icon"/>
                        {dropdownLanguage ? (
                            <ul className="header-col2-dropdown">
                                <li>FR</li>
                                <li>AR</li>
                                <li>RU</li>
                            </ul>) : null}
                    </li>
                </ul>
            </div>
        </div>
        <div className="hero-header-row header-row2">
            <div className="hero-logo">
                <span className="hero-logo-black">Multi</span>
                <span className="hero-logo-yellow">Shop</span>
            </div>
            <div className="hero-search-box">
                <div className="hero-search">
                    <input type="text" placeholder="Search for products"/>
                    <div><FaSearch className="search-icon" /></div>
                </div>
                
            </div>
            <div className="hero-contact">
                <p>Customer Service</p>
                <a href="tel:+012 345 6789">+012 345 6789</a>
            </div>
        </div>
        <div className="header-row3">
            <nav className="hero-header-row">
                <div className="hero-navbar-cats">
                    <div className="hero-navbar-cat" onClick={handleCategory}>
                        <div className="navbar-cat">
                            <FaBars className="navbar-cat-icon1"/>
                            Categories
                        </div>
                        <FaChevronDown className="navbar-cat-icon2"/>
                    </div>
                    {categoryItems ? (
                    <ul className="navbar-cat-items">
                            <div className="navbar-cat-item navbar-cat-dress-item">
                                <div className="cat-dresses">
                                    <div>Dresses</div> 
                                    <FaChevronRight  className="cat-dresses-icon"/>
                                </div>
                                <ul className="cat-dresses-dropdown">
                                    <li>Men's Dresses</li>
                                    <li>Women's Dresses</li>
                                    <li>Baby's Dresses</li>
                                </ul>
                            </div>
                            <li className="navbar-cat-item">Shirts</li>
                            <li className="navbar-cat-item">Jeans</li>
                            <li className="navbar-cat-item">Swimwear</li>
                            <li className="navbar-cat-item">Sleepwear</li>
                            <li className="navbar-cat-item">Sportswear</li>
                            <li className="navbar-cat-item">Jumpsuits</li>
                            <li className="navbar-cat-item">Blazers</li>
                            <li className="navbar-cat-item">Jackets</li>
                            <li className="navbar-cat-item">Shoes</li>
                        </ul> ) : null}
                </div>
                <div className="hero-navbar-menu">
                    <ul className="hero-navbar-menu-items">
                        <li className="menu-item"><NavLink classname={({isActive}) => isActive ? "active" : null} to="/">Home</NavLink></li>
                        <li className="menu-item"><NavLink className={({isActive}) => isActive ? "active" : null} to="/shop">Shop</NavLink></li>
                        <li className="menu-item"><NavLink className={({isActive}) => isActive ? "active" : null}>Shop Detail</NavLink></li>
                        <li className="menu-item hero-navbar-pages">
                            <NavLink className={({isActive}) => isActive ? "active" : null}>Pages
                                <FaChevronDown className="navbar-pages-icon"/>
                            </NavLink>
                            <ul className="hero-navbar-page">
                                <li>Shopping Cart</li>
                                <li>Checkout</li>
                            </ul>
                        </li>
                        <li className="menu-item"><NavLink className={({isActive}) => isActive ? "active" : null}>Contact</NavLink></li>
                    </ul>
                    <div className="hero-navbar-shop">
                        <div className="navbar-shop-items">
                            <FaHeart className="navbar-shop-icon"/>
                            <span>0</span>
                        </div>
                        <div className="navbar-shop-items shop-item-margin">
                            <FaShoppingCart className="navbar-shop-icon"/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    </div>

}

export default Header