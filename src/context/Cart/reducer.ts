import { ApplicationStorage } from '@/utils'
import { useReducer } from 'react'
import { ActionTypes, CartActions, CartState } from './types'

export const cartItemsReducer = (state: CartState, action: CartActions) => {
  let newState: CartState = { ...state }
  const initialState = {}

  switch (action.type) {
    case ActionTypes.SET_COFFEE:
      newState[action.payload.id] = {
        quantity: action.payload.quantity,
        id: action.payload.id,
      }
      break

    case ActionTypes.DELETE_COFFEE:
      delete newState[action.payload]
      break

    case ActionTypes.INCREASE_COFFEE_QUANTITY:
      newState[action.payload.id].quantity += action.payload.by ?? 1
      break

    case ActionTypes.DECREASE_COFFEE_QUANTITY:
      newState[action.payload.id].quantity -= action.payload.by ?? 1
      break

    case ActionTypes.RESET:
      newState = initialState
  }

  ApplicationStorage.cart.set(newState)

  return newState
}
