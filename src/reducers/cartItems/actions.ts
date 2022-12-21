import { ItemInCart } from './reducer'

export const ActionTypes = {
  ADD_COFFEE_TO_CART: 'ADD_COFFEE_TO_CART',
  DELETE_COFFEE_FROM_CART: 'DELETE_COFFEE_FROM_CART',
} as const

export const addCoffeeToCart = (itemInCart: ItemInCart) => {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      id: itemInCart.id,
      quantity: itemInCart.quantity,
    },
  }
}

export const deleteCoffeeFromCart = (id: string) => {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_CART,
    payload: id,
  }
}
