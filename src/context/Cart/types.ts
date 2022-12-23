import type { Coffee } from "@/api"
import { ReactNode } from "react"
import * as zod from 'zod'

export type CartContextProviderProps = {
    children: ReactNode
}

export type AddItemParams = {
    id: Coffee['id']
    quantity: number
}
   
export type CartItem = { quantity: number, id: Coffee['id'] }

export type CartState = Record<Coffee['id'], CartItem>

export const ActionTypes = {
    SET_COFFEE: 'SET_COFFEE',
    INCREASE_COFFEE_QUANTITY: 'INCREASE_COFFEE_QUANTITY',
    DECREASE_COFFEE_QUANTITY: 'DECREASE_COFFEE_QUANTITY',
    DELETE_COFFEE: 'DELETE_COFFEE_FROM_CART',
    RESET: 'RESET',
  } as const
  

export type SetCoffee = {
    type: typeof ActionTypes.SET_COFFEE
    payload: AddItemParams
}

export type IncreaseCoffeeQuantity = {
    type: typeof ActionTypes.INCREASE_COFFEE_QUANTITY
    payload: {id: Coffee['id'], by?: number}
}
  
export type DecreaseCoffeeQuantity = {
    type: typeof ActionTypes.DECREASE_COFFEE_QUANTITY
    payload: {id: Coffee['id'], by?: number}
}

export type DeleteCoffee = {
    type: typeof ActionTypes.DELETE_COFFEE
    payload: keyof CartState
}

export type Reset = {
    type: typeof ActionTypes.RESET
}

export type CartActions = SetCoffee | DeleteCoffee | Reset | IncreaseCoffeeQuantity | DecreaseCoffeeQuantity


export const PaymentMethods = {
    MONEY: 'Dinheiro',
    DEBIT_CARD: 'Cartão de Débito',
    CREDIT_CARD: 'Cartão de Crédito'
} as const

export const orderFormSchema = zod.object({
    CEP: zod.string(),
    street: zod.string().min(1, 'Nome da rua obrigatório'),
    number: zod.string().min(1, 'Número obrigatório'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Bairro obrigatório'),
    city: zod.string().min(1, 'Cidade obrigatório'),
    UF: zod
      .string()
      .min(2, 'UF deve ter 2 caracteres')
      .max(2, 'UF deve ter 2 caracteres'),
    paymentMethod: zod.enum(
      [
        PaymentMethods.CREDIT_CARD, 
        PaymentMethods.DEBIT_CARD, 
        PaymentMethods.MONEY
    ],
      { required_error: 'Selecione uma forma de pagamento' },
    ),
  })
  
export type OrderFormData = zod.infer<
    typeof orderFormSchema
>