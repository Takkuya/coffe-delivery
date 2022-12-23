import { CheckoutCoffeeOrderCard } from '../CheckoutCoffeeOrderCard'
import {
  SelectedCoffeesContainer,
  CardsWrapper,
  CheckoutInfoWrapper,
  PriceWrapper,
  TotalPriceWrapper,
  SelectedCoffeesWrapper,
  ConfirmOrderBtn,
  EmptyCartWrapper,
  TextsWrapper,
  ProductsBtn,
} from './styles'

import { EmptyCart } from '@/assets'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '@/context'
import { Coffee } from '@/api'

export const SelectedCoffees = () => {
  const cart = useCartContext()

  const formattedTotalPrice = cart.totalPrice.toFixed(2)

  const onIncrease = (id: Coffee['id']) => {
    return () => cart.increaseCoffeeQuantity({ id })
  }

  const onDecrease = (id: Coffee['id']) => {
    return () => cart.decreaseCoffeeQuantity({ id })
  }

  const onRemove = (id: Coffee['id']) => {
    return () => cart.deleteCoffee(id)
  }

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <SelectedCoffeesWrapper>
        {cart.isEmpty ? (
          <EmptyCartWrapper>
            <img src={EmptyCart} alt="" />
            <TextsWrapper>
              <h4>Seu carrinho está vazio</h4>
              <p>Parece que você não adicionou nada ao seu carrinho</p>
            </TextsWrapper>
            <NavLink to="/">
              <ProductsBtn>VER PRODUTOS</ProductsBtn>
            </NavLink>
          </EmptyCartWrapper>
        ) : (
          <CardsWrapper>
            {cart.itemList.map((coffee) => {
              return (
                <CheckoutCoffeeOrderCard
                  key={coffee.id}
                  coffee={coffee}
                  onIncrease={onIncrease(coffee.id)}
                  onDecrease={onDecrease(coffee.id)}
                  onRemove={onRemove(coffee.id)}
                />
              )
            })}
          </CardsWrapper>
        )}

        <CheckoutInfoWrapper>
          <PriceWrapper>
            <span>Total de itens</span>
            <span>R$ {formattedTotalPrice}</span>
          </PriceWrapper>
          <PriceWrapper>
            <span>Entrega</span> <span>R$ 0.00</span>
          </PriceWrapper>
          <TotalPriceWrapper>
            <span>Total</span>
            <span>R$ {formattedTotalPrice}</span>
          </TotalPriceWrapper>
        </CheckoutInfoWrapper>

        <ConfirmOrderBtn disabled={cart.isEmpty} type="submit">
          CONFIRMAR PEDIDO
        </ConfirmOrderBtn>
      </SelectedCoffeesWrapper>
    </SelectedCoffeesContainer>
  )
}
