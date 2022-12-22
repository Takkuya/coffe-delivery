import { ActionTypes, AddCoffee, AddItemParams,  DeleteCoffee } from './types'


export const addCoffee = (itemInCart: AddItemParams): AddCoffee => {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      id: itemInCart.id,
      quantity: itemInCart.quantity,
    },
  }
}

export const deleteCoffee = (id: string): DeleteCoffee => {
  return {
    type: ActionTypes.DELETE_COFFEE,
    payload: id,
  }
}
