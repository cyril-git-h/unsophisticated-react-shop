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
            <NavLink to="/">
              <button>
                <span>Return</span>
              </button>
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
