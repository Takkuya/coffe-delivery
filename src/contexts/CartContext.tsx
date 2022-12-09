import { createContext, ReactNode, useState } from 'react'

type CartContextProviderProps = {
  children: ReactNode
}

type Coffee = {
  quantity: number
}

export type CoffeeInCartProps = Coffee & {
  id: number
}

type HandleAddCoffeeToCartProps = Pick<CoffeeInCartProps, 'id' | 'quantity'> & {
  price: number
}

type CoffeesInCart = Record<string, Coffee>

type CartContextType = {
  itemsInCart: CoffeesInCart
  handleAddCoffeeToCart: ({ id, quantity }: HandleAddCoffeeToCartProps) => void
  handleDeleteCoffeeFromCart: (id: string) => void
  handleCoffeeCurrentQuantity: (id: string, currentQuantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<CoffeesInCart>({})

  function handleAddCoffeeToCart({ id, quantity }: HandleAddCoffeeToCartProps) {
    setItemsInCart({
      ...itemsInCart,
      [id]: { quantity },
    })
  }

  function handleDeleteCoffeeFromCart(id: string) {
    delete itemsInCart[id]

    setItemsInCart({ ...itemsInCart })
  }

  function handleCoffeeCurrentQuantity(id: string, currentQuantity: number) {
    setItemsInCart({
      ...itemsInCart,
      [id]: { quantity: currentQuantity },
    })
  }

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        handleAddCoffeeToCart,
        handleDeleteCoffeeFromCart,
        handleCoffeeCurrentQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
