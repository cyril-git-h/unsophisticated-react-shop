import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addToCart from "../Actions/addToCart";
import increment from "../Actions/increment";

export function Item({ id, image, title, description, price }) {
  let selected = useSelector((state) => state.items);

  let [animation, setAnimation] = useState(0);

  const dispatch = useDispatch();
  function cartUpdate(id) {
    if (selected.filter((item) => item.id == id).length == 0) {
      dispatch(addToCart(id));
    } else {
      dispatch(increment(id));
    }
    setAnimation(animation + 1);
  }

  return (
    <div className="item">
      <img src={image} alt="item" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="price-container">
        <span className="price">{price} $</span>
        <div className="item-button">
          {Array.from(Array(animation), (_, i) => (
            <span key={i} className={"item-button__counter"}>
              +1
            </span>
          ))}
          <button onClick={() => cartUpdate(id)}>Buy</button>
        </div>
      </div>
    </div>
  );
}
