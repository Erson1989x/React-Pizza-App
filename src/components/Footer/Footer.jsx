import React from 'react'

const Footer = () => {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  )
}

export default Footer