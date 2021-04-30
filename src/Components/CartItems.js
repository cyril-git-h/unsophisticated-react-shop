import React from "react";
import { useDispatch, useSelector } from "react-redux";
import items from "./ItemsList";
import deleteInstance from "../Actions/deleteInstance";
import decrement from "../Actions/decrement";
import increment from "../Actions/increment";

export default function CartItems() {
  let returnedArray = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function getItem(elem, name) {
    for (let object of items) {
      if (object["id"] == elem) {
        return object[name];
      }
    }
  }

  function compare(a, b) {
    return a.id - b.id;
  }

  function deleteFromCart(elem, num) {
    if (num > 1) {
      return dispatch(decrement(elem));
    }
    return dispatch(deleteInstance(elem));
  }

  let cartInstance = returnedArray
    .concat()
    .sort(compare)
    .map((element) => (
      <li key={element.id}>
        <img width="70px" height="70px" src={getItem(element.item, "image")} alt="place" />
        <div className="cart-items-inner">
          <h2>{getItem(element.item, "title")}</h2>
          <p className="description">{getItem(element.item, "description")}</p>
        </div>
        <div className="counter">
          <span
            onClick={() => deleteFromCart(element.item, element.number)}
            className="change-by-one"
          >
            −
          </span>
          <span>{element.number}</span>
          <span
            onClick={() => dispatch(increment(element.item))}
            className="change-by-one"
          >
            +
          </span>
        </div>
        <span className="price">{getItem(element.item, "price")}$</span>
        <i
          onClick={() => dispatch(deleteInstance(element.item))}
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
