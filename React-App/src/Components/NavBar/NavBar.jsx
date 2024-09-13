import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoSearchSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <img src="/amazon-logo.png" alt="amazon-logo" className="logo-amazon" />
        <div className="address-container">
          <div className="icon">
            <SlLocationPin />
          </div>
          <div className="address-text">
            Delivering to Chandigarh, 140603
            <h2 className="location">Update Location</h2>
          </div>
        </div>
        <div className="input-container">
          <button className="all-btn">
            All <FaSortDown className="btn-down" />
          </button>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="input-box"
          />
          <button className="search-btn">
            <IoSearchSharp />
          </button>
        </div>
        <div className="language-cont">
          <img src="/Flag-India.png" alt="flag" className="flag" />
          <span>
            EN <FaSortDown />
          </span>
        </div>
        <div className="sign-up-cont">
          <span>Hello, sign in</span>
          <h3>
            Account & Lists <FaSortDown />
          </h3>
        </div>
        <div className="returns-order">
          Returns <br /> <h3>& Orders</h3>
        </div>
        <div className="shopping-cart">
          <h3>
            <FiShoppingCart /> Cart
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
