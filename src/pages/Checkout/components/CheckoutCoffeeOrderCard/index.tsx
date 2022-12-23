import {
  CheckoutCoffeeOrderCardContainer,
  InformationWrapper,
  TextsWrapper,
  ButtonsWrapper,
  RemoveBtn,
  IncreaseOrDescreseCoffeeButtonWrapper,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { CartContextValue } from '@/context'

type CheckoutCoffeeOrderCardProps = {
  coffee: CartContextValue['itemList'][number]
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

export const CheckoutCoffeeOrderCard = (
  props: CheckoutCoffeeOrderCardProps,
) => {
  const { coffee, onDecrease, onRemove, onIncrease } = props

  const { name, price, img, quantity } = coffee

  const isAtMinimumAmountForCoffee = quantity <= 1

  const totalPrice = price * quantity

  const totalPriceFormatted = totalPrice.toFixed(2)

  return (
    <CheckoutCoffeeOrderCardContainer>
      <img src={img} alt="" />
      <InformationWrapper>
        <TextsWrapper>
          <p>{name}</p>
          <span>RS {totalPriceFormatted}</span>
        </TextsWrapper>
        <ButtonsWrapper>
          <IncreaseOrDescreseCoffeeButtonWrapper>
            <button
              onClick={onDecrease}
              disabled={isAtMinimumAmountForCoffee}
              type="button"
            >
              <Minus size={16} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={onIncrease} type="button">
              <Plus size={16} weight="bold" />
            </button>
          </IncreaseOrDescreseCoffeeButtonWrapper>

          <RemoveBtn type="button" onClick={onRemove}>
            <Trash size={16} weight="bold" /> REMOVER
          </RemoveBtn>
        </ButtonsWrapper>
      </InformationWrapper>
    </CheckoutCoffeeOrderCardContainer>
  )
}
