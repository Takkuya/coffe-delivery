import {
  BodyWrapper,
  ButtonsWrapper,
  CartBtn,
  CoffeeBadget,
  CoffeeBadgetWrapper,
  CoffeeCardContainer,
  CoffeeImg,
  CoffeeImgWrapper,
  CurrencyText,
  FooterWrapper,
  IncreaseOrDescreseCoffeeButtonWrapper,
  Price,
  PriceWrapper,
} from './styles'
import {
  Minus, Plus, ShoppingCart
} from '@/assets'

import { useState } from 'react'
import { useCartContext } from '@/context'
import { Coffee } from '@/api'

type CoffeeCardProps = {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {

  const cart = useCartContext()
  const [quantity, setQuantity] = useState(1)

  function increaseCoffeeCount() {
    setQuantity(quantity + 1)
  }

  function decreaseCoffeeCount() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function addCoffeeToCart() {
    cart.setCoffee({
      id: coffee.id,
      quantity
    })
  }

  const isAtMinimumCoffeAmount = quantity <= 1

  const priceFormatted = coffee.price.toFixed(2)

  return (
    <CoffeeCardContainer>
      <CoffeeImgWrapper>
        <CoffeeImg src={coffee.img} alt="" />
        <CoffeeBadgetWrapper>
          {coffee.categories.map((category) => {
            return <CoffeeBadget key={category}>{category}</CoffeeBadget>
          })}
        </CoffeeBadgetWrapper>
      </CoffeeImgWrapper>
      <BodyWrapper>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </BodyWrapper>
      <FooterWrapper>
        <PriceWrapper>
          <CurrencyText>R$</CurrencyText>
          <Price>{priceFormatted}</Price>
        </PriceWrapper>
        <ButtonsWrapper>
          <IncreaseOrDescreseCoffeeButtonWrapper>
            <button
              onClick={decreaseCoffeeCount}
              disabled={isAtMinimumCoffeAmount}
            >
              <Minus size={16} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={increaseCoffeeCount}>
              <Plus size={16} weight="bold" />
            </button>
          </IncreaseOrDescreseCoffeeButtonWrapper>
          <CartBtn onClick={addCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartBtn>
        </ButtonsWrapper>
      </FooterWrapper>
    </CoffeeCardContainer>
  )
}
