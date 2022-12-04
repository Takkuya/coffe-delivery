import { createContext, ReactNode, useState } from 'react'
import { CoffeeType } from '../components/Coffees'

type CartContextProviderProps = {
  children: ReactNode
}

type CoffeeInCartProps = {
  id: string
  name: string
  image: string
  quantity: number
  price: number
}

type CartContextType = {
  itemsInCart: any
  handleAddCoffeeToCart: ({
    id,
    name,
    quantity,
    price,
  }: CoffeeInCartProps) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState({})

  console.log(itemsInCart)

  function handleAddCoffeeToCart({
    id,
    name,
    quantity,
    image,
    price,
  }: CoffeeInCartProps) {
    const totalPrice = quantity * price

    setItemsInCart({
      ...itemsInCart,
      [id]: { name, image, quantity, totalPrice },
    })
  }

  return (
    <CartContext.Provider value={{ itemsInCart, handleAddCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
