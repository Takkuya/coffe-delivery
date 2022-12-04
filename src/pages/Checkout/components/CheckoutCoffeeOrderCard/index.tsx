import {
  CheckoutCoffeeOrderCardContainer,
  InformationWrapper,
  TextsWrapper,
  ButtonsWrapper,
  RemoveBtn,
} from './styles'

import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { IncreaseOrDecreaseCoffeeQuantityButton } from '../../../../components/IncreaseOrDecreaseCoffeeQuantityButton'
import { CoffeeInCartProps } from '../../../../contexts/CartContext'

type CheckoutCoffeeOrderCardProps = {
  coffee: CoffeeInCartProps
  quantity: number
}

export const CheckoutCoffeeOrderCard = ({
  coffee,
  quantity,
}: CheckoutCoffeeOrderCardProps) => {
  const [coffeeCount, setCoffeeCount] = useState(1)
  const { name, totalPrice, img } = coffee

  function increaseCoffeeCount() {
    setCoffeeCount(coffeeCount + 1)
  }

  function decreaseCoffeeCount() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
    }
  }

  const coffeeCountIsLessOrEqualThanOne = coffeeCount <= 1

  return (
    <CheckoutCoffeeOrderCardContainer>
      <img src={img} alt="" />
      <InformationWrapper>
        <TextsWrapper>
          <p>{name}</p>
          <span>RS {totalPrice.toFixed(2)}</span>
        </TextsWrapper>
        <ButtonsWrapper>
          <IncreaseOrDecreaseCoffeeQuantityButton
            coffeeCount={coffeeCount}
            onIncreaseCoffeeCount={increaseCoffeeCount}
            onDecreaseCoffeeCount={decreaseCoffeeCount}
            coffeeCountIsLessOrEqualThanOne={coffeeCountIsLessOrEqualThanOne}
            currentQuantity={quantity}
          />

          <RemoveBtn>
            <Trash size={16} weight="bold" /> REMOVER
          </RemoveBtn>
        </ButtonsWrapper>
      </InformationWrapper>
    </CheckoutCoffeeOrderCardContainer>
  )
}
