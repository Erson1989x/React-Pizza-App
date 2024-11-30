import React from "react";
import Pizza from "../Pizza/Pizza";
import { pizzaData } from "../Pizza/data";

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzas > 0 ? <Pizza pizza={pizzas} /> : <p>No pizzas available at the moment. Please come back later.</p>}
    </div>
  );
};

export default Menu;
