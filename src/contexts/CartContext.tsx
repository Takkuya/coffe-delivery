import { createContext, ReactNode, useReducer } from 'react'
import {
  addCoffeeToCart,
  deleteCoffeeFromCart,
} from '../reducers/cartItems/actions'
import { cartItemsReducer } from '../reducers/cartItems/reducer'

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
  removeItemsFromLocalStorage: () => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCartState, dispatch] = useReducer(cartItemsReducer, {}, () => {
    const savedItemsOnCart = localStorage.getItem(
      '@coffee-delivery:add-coffee-to-cart-1.0.0',
    )

    if (savedItemsOnCart) {
      return JSON.parse(savedItemsOnCart)
    }
  })

  //   const itemsInCart = {}
  const itemsInCart = itemsInCartState

  function storeItemsInLocalStorage(id: string, quantity?: number) {
    const itemsInCartJSON = JSON.stringify({
      ...itemsInCartState,
      [id]: { quantity },
    })

    localStorage.setItem(
      '@coffee-delivery:add-coffee-to-cart-1.0.0',
      itemsInCartJSON,
    )
  }

  function removeItemsFromLocalStorage() {
    localStorage.removeItem('@coffee-delivery:add-coffee-to-cart-1.0.0')
  }

  function handleAddCoffeeToCart({ id, quantity }: HandleAddCoffeeToCartProps) {
    const itemInCart = {
      id,
      quantity,
    }

    dispatch(addCoffeeToCart(itemInCart))

    storeItemsInLocalStorage(id, quantity)
  }

  function handleDeleteCoffeeFromCart(id: string) {
    dispatch(deleteCoffeeFromCart(id))

    storeItemsInLocalStorage(id)
  }

  function handleCoffeeCurrentQuantity(id: string, quantity: number) {
    const itemInCart = {
      id,
      quantity,
    }

    dispatch(addCoffeeToCart(itemInCart))

    storeItemsInLocalStorage(id, quantity)
  }

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        handleAddCoffeeToCart,
        handleDeleteCoffeeFromCart,
        handleCoffeeCurrentQuantity,
        removeItemsFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
