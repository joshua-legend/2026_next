"use client";
import { useState } from "react";
import Beverage from "./Beverage";

const Menus = ({ data }) => {
  const origin = data;
  const [beverages, setBeverages] = useState(data);

  const changeAll = () => {
    setBeverages(() => origin);
  };

  const change = (target) => {
    setBeverages(() => origin.filter((x) => x.category == target));
  };

  return (
    <>
      <div className="flex gap-2 items-center mx-auto max-w-5xl">
        <button
          onClick={() => {
            changeAll();
          }}
        >
          ALL
        </button>
        <button
          onClick={() => {
            change("coffee");
          }}
        >
          Coffees
        </button>
        <button
          onClick={() => {
            change("wine");
          }}
        >
          Wines
        </button>
        <button
          onClick={() => {
            change("beer");
          }}
        >
          Beers
        </button>
      </div>
      <section className="grid grid-cols-3 max-w-5xl mx-auto">
        {beverages.map((v, i) => (
          <Beverage key={i} {...v} />
        ))}
      </section>
    </>
  );
};

export default Menus;
