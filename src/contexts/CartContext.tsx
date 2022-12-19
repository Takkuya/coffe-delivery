import { createContext, ReactNode, useEffect, useState } from 'react'

type CartContextProviderProps = {
  children: ReactNode
}

type Coffee = {
  quantity: number
}

export type CoffeeInCartProps = Coffee & {
  id: string
}

type HandleAddCoffeeToCartProps = Pick<
  CoffeeInCartProps,
  'id' | 'quantity'
> & {}

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

  function storeItemsInLocalStorage(id: string, quantity?: number) {
    const itemsInCartJSON = JSON.stringify({
      ...itemsInCart,
      [id]: { quantity },
    })

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
    console.log('rodando')
    console.log(id, quantity)

    setItemsInCart((state) => {
      return {
        ...state,
        [id]: { quantity },
      }
    })

    // console.log('valor', {
    //   ...itemsInCart,
    //   [id]: { quantity },
    // })

    storeItemsInLocalStorage(id, quantity)
  }

  function handleDeleteCoffeeFromCart(id: string) {
    delete itemsInCart[id]

    setItemsInCart((state) => {
      return {
        ...state,
      }
    })

    storeItemsInLocalStorage(id)
  }

  function handleCoffeeCurrentQuantity(id: string, quantity: number) {
    setItemsInCart((state) => {
      return {
        ...state,
        [id]: { quantity },
      }
    })

    storeItemsInLocalStorage(id, quantity)
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
