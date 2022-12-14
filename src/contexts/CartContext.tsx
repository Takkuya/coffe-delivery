import { createContext, ReactNode, useEffect, useState } from 'react'

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

  function storeItemsInLocalStorage() {
    const itemsInCartJSON = JSON.stringify(itemsInCart)

    localStorage.setItem(
      '@coffee-delivery:add-coffee-to-cart-1.0.0',
      itemsInCartJSON,
    )
  }

  function getItemsFromLocalStorage() {
    const savedItemsOnCart = localStorage.getItem(
      '@coffee-delivery:add-coffee-to-cart-1.0.0',
    )

    if (savedItemsOnCart) {
      setItemsInCart(JSON.parse(savedItemsOnCart))
    }
  }

  useEffect(() => {
    getItemsFromLocalStorage()
  }, [])

  function handleAddCoffeeToCart({ id, quantity }: HandleAddCoffeeToCartProps) {
    setItemsInCart({
      ...itemsInCart,
      [id]: { quantity },
    })

    storeItemsInLocalStorage()
  }

  function handleDeleteCoffeeFromCart(id: string) {
    delete itemsInCart[id]

    storeItemsInLocalStorage()
  }

  function handleCoffeeCurrentQuantity(id: string, currentQuantity: number) {
    setItemsInCart({
      ...itemsInCart,
      [id]: { quantity: currentQuantity },
    })
    storeItemsInLocalStorage()
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
