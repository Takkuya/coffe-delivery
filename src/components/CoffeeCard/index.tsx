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
import { IncreaseOrDecreaseCoffeeButton } from '../IncreaseOrDecreaseCoffeQuantityButton'

type CoffeeType = {
  img: string
  badgets: string[]
  name: string
  description: string
  price: string
}

type CoffeeCardProps = {
  Coffee: CoffeeType
}

export const CoffeeCard = ({ Coffee }: CoffeeCardProps) => {
  console.log(Coffee)
  const { img, badgets, name, description, price } = Coffee

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
          <Price>{price}</Price>
        </PriceWrapper>
        <ButtonsWrapper>
          <IncreaseOrDecreaseCoffeeButton />
          <CartBtn>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartBtn>
        </ButtonsWrapper>
      </FooterWrapper>
    </CoffeeCardContainer>
  )
}
