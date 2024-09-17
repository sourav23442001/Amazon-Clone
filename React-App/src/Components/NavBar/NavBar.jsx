import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
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
            <IoSearch />
          </button>
        </div>
        <div className="language-cont">
          <img src="/Flag-India.png" alt="flag" className="flag" />
          <span className="lang">
            EN <FaSortDown />
          </span>
        </div>
        <div className="sign-up-cont">
          Hello, sign in
          <h2 className="acc">
            Account & Lists <FaSortDown />
          </h2>
        </div>
        <div className="returns-order">
          Returns
          <h2 className="order">& Orders</h2>
        </div>
        <div className="shopping-cart">
          <h2 className="order-icon">
            <span className="count">0</span>
            <FiShoppingCart />
          </h2>
          Cart
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
