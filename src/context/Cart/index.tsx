import { Coffee, coffees } from '@/api'
import { ApplicationStorage, useLocalStorageState } from '@/utils'
import { useContext, useMemo } from 'react'
import { createContext, useReducer } from 'react'
import { cartItemsReducer } from './reducer'
import { ActionTypes, CartContextProviderProps, CartState, SetCoffee, DecreaseCoffeeQuantity, DeleteCoffee, IncreaseCoffeeQuantity, CartItem, OrderFormData } from './types'

export type CartContextValue = {
  items: CartState
  itemList: (CartItem & Coffee)[]
  itemCount: number
  isEmpty: boolean
  totalPrice: number
  order: OrderFormData

  onSubmitOrder: (order: OrderFormData) => void

  setCoffee: (payload: SetCoffee['payload']) => void
  increaseCoffeeQuantity: (payload: IncreaseCoffeeQuantity['payload']) => void
  decreaseCoffeeQuantity: (payload: DecreaseCoffeeQuantity['payload']) =>  void
  deleteCoffee: (id: DeleteCoffee['payload']) =>  void
  reset: () => void
}

export const CartContext = createContext({} as CartContextValue)

export const CartContextProvider = (props: CartContextProviderProps) => {

  const { children } = props

  const [items, dispatch] = useReducer(cartItemsReducer, {},  ApplicationStorage.cart.get)
  const [order, setOrder] = useLocalStorageState(ApplicationStorage.order)


  const setCoffee:CartContextValue['setCoffee'] = (payload) => {
    dispatch({
      type: ActionTypes.SET_COFFEE,
      payload
    })
  }

  const increaseCoffeeQuantity:CartContextValue['increaseCoffeeQuantity'] = (payload) => {
    dispatch({
      type: ActionTypes.INCREASE_COFFEE_QUANTITY,
      payload,
    })
  }

  const decreaseCoffeeQuantity:CartContextValue['decreaseCoffeeQuantity'] = (payload) => {
    dispatch({
      type: ActionTypes.DECREASE_COFFEE_QUANTITY,
      payload,
    })
  }

  const deleteCoffee:CartContextValue['deleteCoffee'] = (id) => {
    dispatch({
      type: ActionTypes.DELETE_COFFEE,
      payload: id,
    })
  }

  const reset:CartContextValue['reset'] = () => {
    dispatch({
      type: ActionTypes.RESET,
    })
  }

  const onSubmitOrder:CartContextValue['onSubmitOrder'] = (to) => {
    setOrder(to)
    reset()
  }

  let totalPrice = 0

  const itemList = []

  for(const itemId in items){
    const coffee = {
      ...coffees[itemId],
      ...items[itemId]

    } 
  
    itemList.push(coffee)

    totalPrice += coffee.quantity * coffee.price 
  }

  const itemCount = itemList.length

  const isEmpty = itemCount <= 0

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        itemList,
        isEmpty,
        totalPrice,
        setCoffee,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        deleteCoffee,
        reset,
        order,
        onSubmitOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


export const useCartContext = () => {
  return useContext(CartContext)
}

export * from './types'