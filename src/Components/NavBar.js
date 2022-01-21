import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../images/Logo/BombQ.png";
import CartIcon from "./cart-icon/cart-icon.jsx";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = ({ setOpenCart, cart }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="logo">
          <img src={logo} height="100px" />
        </div>
        <div className={show ? "bars" : " bars top"}>
          <li
            className="cart-icon"
            onClick={() => {
              setOpenCart(false);
            }}>
            <CartIcon itemCount={cart} />
          </li>
          <Hamburger
            color={show ? "#000" : "#fff"}
            toggled={show}
            toggle={setShow}
          />
        </div>
      </div>
      <div className="nav-desk">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={show ? "nav-mobile" : " nav-mobile show"}>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setShow(true);
                }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                onClick={() => {
                  setShow(true);
                }}>
                Store
              </Link>
            </li>
            6{" "}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
