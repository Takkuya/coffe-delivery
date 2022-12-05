import { createContext, ReactNode, useState } from 'react'
import { coffees } from '../components/Coffees'

type CartContextProviderProps = {
  children: ReactNode
}

type Coffee = {
  name: string
  img: string
  quantity: number
  totalPrice: number
}

export type CoffeeInCartProps = Coffee & {
  id: number
}

type HandleAddCoffeeToCartProps = Pick<
  CoffeeInCartProps,
  'id' | 'name' | 'img' | 'quantity'
> & {
  price: number
}

type CoffeesInCart = Record<string, Coffee>

type CartContextType = {
  itemsInCart: CoffeesInCart
  handleAddCoffeeToCart: ({
    id,
    name,
    quantity,
    price,
  }: HandleAddCoffeeToCartProps) => void
  handleDeleteCoffeeFromCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<CoffeesInCart>({})

  function handleAddCoffeeToCart({ id, quantity }: HandleAddCoffeeToCartProps) {
    const { name, img, price } = coffees[id]

    const totalPrice = quantity * price

    console.log('itens no carrinho', itemsInCart)

    setItemsInCart({
      ...itemsInCart,
      [id]: { name, img, quantity, totalPrice },
    })
  }

  function handleDeleteCoffeeFromCart(id: string) {
    delete itemsInCart[id]

    setItemsInCart({ ...itemsInCart })
  }

  //   function handleTotalSumOfItems() {}

  return (
    <CartContext.Provider
      value={{ itemsInCart, handleAddCoffeeToCart, handleDeleteCoffeeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
