import React from "react";
import items from "./ItemsList";
import { Item } from "./Item";

export default function Section({ title }) {
  const Element = items.map((item) =>
    title == item.theme ? (
      <Item
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    ) : (
      false
    )
  );
  return (
    <section className="section" id={title}>
      <h1>{title}</h1>
      <div className="section__inner">{Element}</div>
    </section>
  );
}
