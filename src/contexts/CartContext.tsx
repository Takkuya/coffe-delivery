import { createContext, ReactNode, useState } from 'react'
import { CoffeeType } from '../components/Coffees'

type CartContextProviderProps = {
  children: ReactNode
}

export type CoffeeInCartProps = {
  id: number
  name: string
  img: string
  quantity: number
  totalPrice: number
}

type handleAddCoffeeToCartProps = Pick<
  CoffeeInCartProps,
  'id' | 'name' | 'img' | 'quantity'
> & {
  price: number
}

type CartContextType = {
  itemsInCart: any
  handleAddCoffeeToCart: ({
    id,
    name,
    quantity,
    price,
  }: handleAddCoffeeToCartProps) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState({})

  function handleAddCoffeeToCart({
    id,
    name,
    quantity,
    img,
    price,
  }: handleAddCoffeeToCartProps) {
    const totalPrice = quantity * price

    setItemsInCart({
      ...itemsInCart,
      [id]: { name, img, quantity, totalPrice },
    })
  }

  return (
    <CartContext.Provider value={{ itemsInCart, handleAddCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
