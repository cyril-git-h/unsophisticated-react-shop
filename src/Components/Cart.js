import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import items from "./ItemsList";
import Footer from "./Footer";

export default function Cart() {
  const storeItems = useSelector((state) => state.items);

  let sumprice = storeItems.reduce(function (acc, curr) {
    for (let item of items) {
      if (item["id"] == curr.id) {
        curr = item["price"] * curr.number;
      }
    }
    return acc + curr;
  }, 0);

  return (
    <div className="page">
      <header className="header">
        <div style={{ position: "static" }} className="container">
          <div className="header__inner">
            <h1>Hi there</h1>
            <NavLink className="return-button" to="/">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="undo"
                className="svg-inline--fa fa-undo fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
                ></path>
              </svg>
              <span>Return</span>
            </NavLink>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="cart">
            <h1>Your cart</h1>
            <CartItems />
            <div className="all-sum-outer">
              <div className="all-sum">
                <h2>
                  Complete price: <span className="price">{sumprice} $</span>
                </h2>
                <button>Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
