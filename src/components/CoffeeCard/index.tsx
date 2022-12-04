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
  Price,
  PriceWrapper,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { IncreaseOrDecreaseCoffeeQuantityButton } from '../IncreaseOrDecreaseCoffeeQuantityButton'
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
      name,
      price,
      img,
      quantity: coffeeCount,
    })
  }

  const coffeeCountIsLessOrEqualThanOne = coffeeCount <= 1

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
          <Price>{price.toFixed(2)}</Price>
        </PriceWrapper>
        <ButtonsWrapper>
          <IncreaseOrDecreaseCoffeeQuantityButton
            coffeeCount={coffeeCount}
            onIncreaseCoffeeCount={increaseCoffeeCount}
            onDecreaseCoffeeCount={decreaseCoffeeCount}
            coffeeCountIsLessOrEqualThanOne={coffeeCountIsLessOrEqualThanOne}
          />
          <CartBtn onClick={addCoffeeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartBtn>
        </ButtonsWrapper>
      </FooterWrapper>
    </CoffeeCardContainer>
  )
}
