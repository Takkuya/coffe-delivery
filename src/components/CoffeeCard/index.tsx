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

import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeType } from '../Coffees'

type CoffeeCardProps = {
  Coffee: CoffeeType
}

export const CoffeeCard = ({ Coffee }: CoffeeCardProps) => {
  const { id, img, badgets, name, description, price } = Coffee
  const { handleAddCoffeeToCart } = useContext(CartContext)

  const [coffeeCount, setCoffeeCount] = useState(1)

  function increaseCoffeeCount() {
    setCoffeeCount(coffeeCount + 1)
  }

  function decreaseCoffeeCount() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
    }
  }

  function addCoffeeToCart() {
    handleAddCoffeeToCart({
      id,
      quantity: coffeeCount,
    })
  }

  const isAtMinimumCoffeAmount = coffeeCount <= 1

  const priceFormatted = price.toFixed(2)

  return (
    <CoffeeCardContainer>
      <CoffeeImgWrapper>
        <CoffeeImg src={img} alt="" />
        <CoffeeBadgetWrapper>
          {badgets.map((badget: string) => {
            return <CoffeeBadget key={badget}>{badget}</CoffeeBadget>
          })}
        </CoffeeBadgetWrapper>
      </CoffeeImgWrapper>
      <BodyWrapper>
        <h3>{name}</h3>
        <p>{description}</p>
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
            <span>{coffeeCount}</span>
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
