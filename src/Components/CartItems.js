import React from "react";
import { useDispatch, useSelector } from "react-redux";
import items from "./ItemsList";
import deleteInstance from "../Actions/deleteInstance";
import decrement from "../Actions/decrement";
import increment from "../Actions/increment";

export default function CartItems() {
  let returnedArray = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function getItem(id, field) {
    for (let item of items) {
      if (item["id"] == id) {
        return item[field];
      }
    }
  }

  function compare(a, b) {
    return a.id - b.id;
  }

  function deleteFromCart(id, num) {
    if (num > 1) {
      return dispatch(decrement(id));
    }
    return dispatch(deleteInstance(id));
  }

  let cartInstance = returnedArray
    .concat()
    .sort(compare)
    .map((item) => (
      <li key={item.id}>
        <img
          width="70px"
          height="70px"
          src={getItem(item.id, "image")}
          alt="place"
        />
        <div className="cart-items-inner">
          <h2>{getItem(item.id, "title")}</h2>
          <p className="description">{getItem(item.id, "description")}</p>
        </div>
        <div className="counter">
          <span
            onClick={() => deleteFromCart(item.id, item.number)}
            className="change-by-one"
          >
            −
          </span>
          <span>{item.number}</span>
          <span
            onClick={() => dispatch(increment(item.id))}
            className="change-by-one"
          >
            +
          </span>
        </div>
        <span className="price">{getItem(item.id, "price")}$</span>
        <i
          onClick={() => dispatch(deleteInstance(item.id))}
          className="fas fa-trash"
        ></i>
      </li>
    ));
  return (
    <>
      {cartInstance.length !== 0 ? (
        <ul className="cart-items">{cartInstance}</ul>
      ) : (
        <div className="cart-empty-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              fill="#fff"
            ></path>
          </svg>
          <span>cart is empty</span>
        </div>
      )}
    </>
  );
}
