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
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesWrapper>
        <CardsWrapper>
          <CheckoutCoffeeOrderCard />
          <CheckoutCoffeeOrderCard />
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
