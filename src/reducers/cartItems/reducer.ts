import { ActionTypes } from './actions'

export type ItemInCart = {
  id: string
  quantity: number
}

type CartItemState = {
  [key: string]: {
    quantity: number
  }
}

type AddCoffeeToCartProps = {
  type: typeof ActionTypes.ADD_COFFEE_TO_CART
  payload: { id: string; quantity: number }
}

type DeleteCoffeeFromCartProps = {
  type: typeof ActionTypes.DELETE_COFFEE_FROM_CART
  payload: string
}

type ActionsProps = AddCoffeeToCartProps | DeleteCoffeeFromCartProps

export const cartItemsReducer = (
  state: CartItemState,
  action: ActionsProps,
) => {
  const newState = { ...state }
  console.log(action)

  switch (action.type) {
    case 'ADD_COFFEE_TO_CART':
      newState[action.payload.id] = {
        quantity: action.payload.quantity,
      }
      break
    case 'DELETE_COFFEE_FROM_CART':
      delete newState[action.payload]
      break
  }

  localStorage.setItem(
    '@coffee-delivery:add-coffee-to-cart-1.0.0',
    JSON.stringify(newState),
  )

  return newState
}
