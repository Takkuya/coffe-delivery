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
import { CoffeeType } from '../../../../components/Coffees'

type CheckoutCoffeeOrderCardProps = CoffeeType & {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export const CheckoutCoffeeOrderCard = ({
  id,
  name,
  price,
  image,
  quantity,
}: CheckoutCoffeeOrderCardProps) => {
  const [coffeeCount, setCoffeeCount] = useState(1)

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
      <img src={image} alt="" />
      <InformationWrapper>
        <TextsWrapper>
          <p>{name}</p>
          <span>RS {price.toFixed(2)}</span>
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
