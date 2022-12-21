import { Action } from '@remix-run/router'
import { createContext, ReactNode, useReducer } from 'react'

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

type ItemsInCartState = {
  itemsInCart: CoffeesInCart
}

type CartContextType = {
  itemsInCart: CoffeesInCart
  handleAddCoffeeToCart: ({ id, quantity }: HandleAddCoffeeToCartProps) => void
  handleDeleteCoffeeFromCart: (id: string) => void
  handleCoffeeCurrentQuantity: (id: string, currentQuantity: number) => void
  removeItemsFromLocalStorage: () => void
}

type ActionType =
  | {
      type: 'ADD_COFFEE_TO_CART'
      payload: {
        id: string
        quantity: number
      }
    }
  | {
      type: 'DELETE_COFFEE_FROM_CART'
      payload: {
        id: string
      }
    }

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [itemsInCartState, dispatch] = useReducer(
    (state: ItemsInCartState, action: ActionType) => {
      const newState = { ...state }

      if (action.type === 'ADD_COFFEE_TO_CART') {
        newState[action.payload.id] = {
          quantity: action.payload.quantity,
        }
      }

      if (action.type === 'DELETE_COFFEE_FROM_CART') {
        delete newState[action.payload]
      }

      localStorage.setItem(
        '@coffee-delivery:add-coffee-to-cart-1.0.0',
        JSON.stringify(newState),
      )

      return newState
    },
    {},
    () => {
      const savedItemsOnCart = localStorage.getItem(
        '@coffee-delivery:add-coffee-to-cart-1.0.0',
      )

      if (savedItemsOnCart) {
        return JSON.parse(savedItemsOnCart)
      }
    },
  )

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
    // setItemsInCart({})
  }

  function handleAddCoffeeToCart({ id, quantity }: HandleAddCoffeeToCartProps) {
    dispatch({
      type: 'ADD_COFFEE_TO_CART',
      payload: { id, quantity },
    })

    storeItemsInLocalStorage(id, quantity)
  }

  function handleDeleteCoffeeFromCart(id: string) {
    dispatch({
      type: 'DELETE_COFFEE_FROM_CART',
      payload: id,
    })

    storeItemsInLocalStorage(id)
  }

  function handleCoffeeCurrentQuantity(id: string, quantity: number) {
    dispatch({
      type: 'ADD_COFFEE_TO_CART',
      payload: { id, quantity },
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
        removeItemsFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
