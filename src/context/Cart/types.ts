import type { Coffee } from "@/api"
import { ReactNode } from "react"

export type CartContextProviderProps = {
    children: ReactNode
}

export type AddItemParams = {
    id: Coffee['id']
    quantity: number
}
   
export type CartItem = { quantity: number }

export type CartState = Record<Coffee['id'], CartItem>

export type CartContextValue = {
    items: CartState
    handleAddCoffeeToCart: (params: AddItemParams) => void
    handleDeleteCoffeeFromCart: (id: string) => void
    handleCoffeeCurrentQuantity: (id: string, currentQuantity: number) => void
    handleDeleteCoffeeWhenSubmited: () => void
    removeItemsFromLocalStorage: () => void
    addItem: (params: AddItemParams) => void
}
  
export const ActionTypes = {
    ADD_COFFEE: 'ADD_COFFEE_TO_CART',
    DELETE_COFFEE: 'DELETE_COFFEE_FROM_CART',
    RESET: 'RESET',
  } as const
  

export type AddCoffee = {
    type: typeof ActionTypes.ADD_COFFEE
    payload: AddItemParams
}
  
export type DeleteCoffee = {
    type: typeof ActionTypes.DELETE_COFFEE
    payload: keyof CartState
}

export type Reset = {
    type: typeof ActionTypes.RESET
}

export type CartActions = AddCoffee | DeleteCoffee | Reset