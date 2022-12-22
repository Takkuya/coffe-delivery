import { LocalStorageKeys } from '@/constants'
import { ApplicationStorage } from '@/utils'
import { useContext } from 'react'
import { createContext, ReactNode, useReducer } from 'react'
import { cartItemsReducer } from './reducer'

import { ActionTypes, CartContextProviderProps, CartContextValue } from './types'

export const CartContext = createContext({} as CartContextValue)

export const CartContextProvider = (props: CartContextProviderProps) => {

  const { children } = props

  const [items, dispatch] = useReducer(cartItemsReducer, {},  ApplicationStorage.cart.get)


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

  function handleDeleteCoffeeWhenSubmited() {
    dispatch(deleteCoffeeWhenSubmited())
  }

  const addItem:CartContextValue['addItem'] = (payload) => {
    dispatch({
      type: ActionTypes.ADD_COFFEE,
      payload
    })
  }

  const addItem:CartContextValue['addItem'] = (payload) => {
    dispatch({
      type: ActionTypes.ADD_COFFEE,
      payload
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


export const useCartContext = () => {
  return useContext(CartContext)
}