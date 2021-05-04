import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import items from "./ItemsList";
import CartItems from "./CartItems";
import { smoothScrollFunction, sliderFunction } from "../vanilla";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import darkgreen from "../images/darkgreen.png";
import brightgreen from "../images/brightgreen.png";
import black from "../images/black.png";
import aqua from "../images/aqua.png";

export default function Header() {
  useEffect(smoothScrollFunction, []);
  useEffect(sliderFunction, []);

  const storeItems = useSelector((state) => state.items);

  let sumprice = storeItems.reduce(function (acc, curr) {
    for (let item of items) {
      if (item["id"] == curr.id) {
        curr = item["price"] * curr.number;
      }
    }
    return acc + curr;
  }, 0);

  const [inProp, setInProp] = useState(false);

  // findDOMNode error shooting
  const nodeRef = React.useRef(null);

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="slider">
            <i className="fas fa-arrow-circle-right" id="rightbtn"></i>
            <i className="fas fa-arrow-circle-left" id="leftbtn"></i>
            <div className="slider__inner">
              <img src={darkgreen} alt="slide" id="lastClone" />
              <img src={aqua} alt="slide" />
              <img src={black} alt="slide" />
              <img src={brightgreen} alt="slide" />
              <img src={darkgreen} alt="slide" />
              <img src={aqua} alt="slide" id="firstClone" />
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div
              className="header__left"
              style={{ position: "relative", height: "fit-content" }}
            >
              <div
                className="cart-icon-container"
                onMouseOver={() => setInProp(true)}
                onMouseLeave={() => setInProp(false)}
              >
                <NavLink to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span>
                    {storeItems.reduce((acc, curr) => acc + curr.number, 0)}
                  </span>
                </NavLink>
                <CSSTransition
                  nodeRef={nodeRef}
                  in={inProp}
                  timeout={{
                    enter: 300,
                    exit: 0,
                  }}
                  classNames="cart-transitions"
                  unmountOnExit
                >
                  <div ref={nodeRef} className="cart-transition">
                    <div className="cart-transition__inner">
                      <CartItems />
                      {sumprice !== 0 && (
                        <div className="all-sum">
                          <h2>
                            Complete price:{" "}
                            <span className="price">{sumprice} $</span>
                          </h2>
                        </div>
                      )}
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
            <div className="header__right">
              <div className="socials header__socials">
                <a href="#" className="socials__icon">
                  <img src={icon1} alt="ln" />
                </a>
                <a href="#" className="socials__icon">
                  <img src={icon2} alt="fb" />
                </a>
                <a href="#" className="socials__icon">
                  <img src={icon3} alt="flickr" />
                </a>
                <a href="#" className="socials__icon">
                  <img src={icon4} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <nav class="navigation">
            <ul className="navigation__list">
              <li className="navigation__link">
                <a href="#Shirts">Shirts</a>
              </li>
              <li class="navigation__link">
                <a href="#Pants">Pants</a>
              </li>
              <li class="navigation__link">
                <a href="#Suites">Suites</a>
              </li>
              <li class="navigation__link">
                <a href="#Skirts">Skirts</a>
              </li>
              <li class="navigation__link">
                <a href="#Hats">Hats</a>
              </li>
              <li class="navigation__link">
                <a href="#Socks">Socks</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
