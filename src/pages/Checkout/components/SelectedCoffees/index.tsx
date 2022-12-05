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
  EmptyCartWrapper,
  TextsWrapper,
  ProductsBtn,
} from './styles'

import EmptyCard from '../../../../assets/EmptyCart.svg'
import { NavLink } from 'react-router-dom'

export const SelectedCoffees = () => {
  const { itemsInCart } = useContext(CartContext)

  const itemsInCartArray = Object.entries(itemsInCart).map(([id, coffees]) => {
    return Object.assign({ id, coffees })
  })

  const getTotalCoffeesPrices = itemsInCartArray.map((coffee) => {
    return coffee.coffees.totalPrice
  })

  const totalPriceOfAllCoffeesInCart = getTotalCoffeesPrices.reduce(
    (previousValue, nextValue) => {
      return (previousValue += nextValue)
    },
    0,
  )

  const totalPriceOfAllCoffeesInCartFormatted =
    totalPriceOfAllCoffeesInCart.toFixed(2)

  const isShoppingCartEmpty = itemsInCartArray.length === 0

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <SelectedCoffeesWrapper>
        {isShoppingCartEmpty ? (
          <EmptyCartWrapper>
            <img src={EmptyCard} alt="" />
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
            {itemsInCartArray.map((coffee) => {
              return (
                <CheckoutCoffeeOrderCard
                  key={coffee.id}
                  id={coffee.id}
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
        )}

        <CheckoutInfoWrapper>
          <PriceWrapper>
            <span>Total de itens</span>
            <span>R$ {totalPriceOfAllCoffeesInCartFormatted}</span>
          </PriceWrapper>
          <PriceWrapper>
            <span>Entrega</span> <span>R$ 0.00</span>
          </PriceWrapper>
          <TotalPriceWrapper>
            <span>Total</span>
            <span>R$ {totalPriceOfAllCoffeesInCartFormatted}</span>
          </TotalPriceWrapper>
        </CheckoutInfoWrapper>
        <ConfirmOrderBtn disabled={isShoppingCartEmpty}>
          CONFIRMAR PEDIDO
        </ConfirmOrderBtn>
      </SelectedCoffeesWrapper>
    </SelectedCoffeesContainer>
  )
}
