import React, { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (itemId) => {
    setCartItems([...cartItems, itemId])
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
