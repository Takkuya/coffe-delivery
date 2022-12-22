import { ApplicationStorage } from "@/utils"
import { useReducer } from "react"
import { ActionTypes, CartActions, CartState } from "./types"


export const cartItemsReducer = (
  state: CartState,
  action: CartActions,
) => {
  const newState:CartState = { ...state }
  const initialState = {}

  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      newState[action.payload.id] = {
        quantity: action.payload.quantity,
      }
      break
    case ActionTypes.DELETE_COFFEE:
      delete newState[action.payload]
      break
    case ActionTypes.RESET:
      return initialState
  }

  return newState
}

export function useCartReducer() {
  const [items, dispatch] = useReducer(cartItemsReducer, {},  ApplicationStorage.cart.get)
}