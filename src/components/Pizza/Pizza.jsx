import React from 'react'


const Pizza = ({ pizza }) => {
    return (
      <div className="pizzas">
        {pizza.map(({ name, ingredients, price, photoName, soldOut }, index) => {
          return (
            <div className={`pizza ${soldOut ? 'sold-out' : ''}`} key={index}>
              <img src={photoName} alt={name} />
              <div>
                <h1>{name}</h1>
                <p>{ingredients}</p>
                <span>{soldOut ? 'SOLD OUT' : price}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  export default Pizza