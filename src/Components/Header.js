import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import items from "./ItemsList";
import CartItems from "./CartItems";
import { smoothScrollFunction } from "../vanilla";

export default function Header() {
  useEffect(smoothScrollFunction, []);

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
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav>
            <a href="#Shirts">Shirts</a>
            <a href="#Pants">Pants</a>
            <a href="#Suites">Suites</a>
            <a href="#Skirts">Skirts</a>
            <a href="#Hats">Hats</a>
            <a href="#Socks">Socks</a>
          </nav>
          <div
            style={{ position: "relative", height: "fit-content" }}
            onMouseOver={() => setInProp(true)}
            onMouseLeave={() => setInProp(false)}
          >
            <NavLink to="/cart" className="cart-link">
              <button>
                <span>Shopping cart</span>
                <span>{storeItems.reduce((acc, curr) => acc + curr.number, 0)}</span>
              </button>
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
      </div>
    </header>
  );
}
