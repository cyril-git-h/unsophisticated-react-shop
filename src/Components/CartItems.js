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
        <img width="70px" height="70px" src={getItem(item.id, "image")} alt="place" />
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
    <ul className="cart-items">
      {cartInstance.length !== 0 ? (
        cartInstance
      ) : (
        <h1 className="cart__empty">is empty</h1>
      )}
    </ul>
  );
}
