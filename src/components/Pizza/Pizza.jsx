import React from 'react'
import { pizzaData } from './data'

const Pizza = () => {

  return (
    <div className='pizzas'>{pizzaData.map(({name, ingredients, price, photoName}, index) => {
      return (
        <div className='pizza' key={index}>
        <img src={photoName} alt={name} />
        <div>
        <h1>{name}</h1>
        <p>{ingredients}</p>
        <p>{price}-$</p>
        <button className='order'>Order</button>
        </div>
        </div>
      )
    })}
        </div>
  )
}

export default Pizza