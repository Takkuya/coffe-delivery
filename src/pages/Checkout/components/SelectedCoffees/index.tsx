import { useContext } from 'react'
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
  console.log('aaa', itemsInCartArray)

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesWrapper>
        <CardsWrapper>
          {itemsInCartArray.map((coffee) => {
            return (
              <CheckoutCoffeeOrderCard
                key={coffee.coffees.id}
                id={coffee.coffees.id}
                image={coffee.coffees.image}
                name={coffee.coffees.name}
                price={coffee.coffees.totalPrice}
                quantity={coffee.coffees.quantity}
              />
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
