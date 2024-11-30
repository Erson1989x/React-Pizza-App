import React from 'react'


const Pizza = ( {pizza}) => {

  return (
    <div className='pizzas'>{pizza.map(({name, ingredients, price, photoName}, index) => {
      return (
        <div className='pizza' key={index}>
        <img src={photoName} alt={name} />
        <div>
        <h1>{name}</h1>
        <p>{ingredients}</p>
        <p>{price}-$</p>
        </div>
        </div>
      )
    })}
        </div>
  )
}

export default Pizza