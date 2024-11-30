import React from "react";
import Pizza from "../Pizza/Pizza";
import { pizzaData } from "../Pizza/data";

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>
          <Pizza pizza={pizzas} />
        </>
      ) : (
        <p>No pizzas available at the moment. Please come back later.</p>
      )}
    </div>
  );
};

export default Menu;