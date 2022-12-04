import { useContext } from 'react'
import { coffees } from '../../../../components/Coffees'
import { CartContext } from '../../../../contexts/CartContext'
import { CheckoutCoffeeOrderCard } from '../CheckoutCoffeeOrderCard'
import {
  SelectedCoffeesContainer,
  CardsWrapper,
  CheckoutInfoWrapper,
  PriceWrapper,
  TotalPriceWrapper,
  SelectedCoffeesWrapper,
  ConfirmOrderBtn,
} from './styles'

export const SelectedCoffees = () => {
  const { itemsInCart } = useContext(CartContext)

  const itemsInCartArray = Object.entries(itemsInCart).map(([id, coffees]) => {
    return Object.assign({ id, coffees })
  })

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <SelectedCoffeesWrapper>
        <CardsWrapper>
          {itemsInCartArray.map((coffee) => {
            return (
              <CheckoutCoffeeOrderCard
                key={coffee.id}
                coffee={coffee.coffees}
                quantity={coffee.coffees.quantity}
              />

              //   <CheckoutCoffeeOrderCard
              //   key={coffee.id}
              //   coffee={coffees[coffee.id]}
              //   quantity={coffee.coffees.quantity}
              // />
            )
          })}
        </CardsWrapper>
        <CheckoutInfoWrapper>
          <PriceWrapper>
            <span>Total de itens</span> <span>R$ 29,70</span>
          </PriceWrapper>
          <PriceWrapper>
            <span>Entrega</span> <span>R$ 3,50</span>
          </PriceWrapper>
          <TotalPriceWrapper>
            <span>Total</span> <span>R$ 33,20</span>
          </TotalPriceWrapper>
        </CheckoutInfoWrapper>
        <ConfirmOrderBtn>CONFIRMAR PEDIDO</ConfirmOrderBtn>
      </SelectedCoffeesWrapper>
    </SelectedCoffeesContainer>
  )
}
