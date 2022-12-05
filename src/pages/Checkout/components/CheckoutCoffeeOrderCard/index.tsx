import {
  CheckoutCoffeeOrderCardContainer,
  InformationWrapper,
  TextsWrapper,
  ButtonsWrapper,
  RemoveBtn,
} from './styles'

import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { IncreaseOrDecreaseCoffeeQuantityButton } from '../../../../components/IncreaseOrDecreaseCoffeeQuantityButton'
import {
  CartContext,
  CoffeeInCartProps,
} from '../../../../contexts/CartContext'

type CheckoutCoffeeOrderCardProps = {
  coffee: CoffeeInCartProps
  id: string
  quantity: number
}

export const CheckoutCoffeeOrderCard = ({
  coffee,
  id,
  quantity,
}: CheckoutCoffeeOrderCardProps) => {
  const [coffeeCount, setCoffeeCount] = useState(1)
  const { handleDeleteCoffeeFromCart } = useContext(CartContext)
  const { name, totalPrice, img } = coffee

  function increaseCoffeeCount() {
    setCoffeeCount(coffeeCount + 1)
  }

  function decreaseCoffeeCount() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
    }
  }

  function deleteCoffeeFromCart() {
    console.log(id)

    handleDeleteCoffeeFromCart(id)
  }

  const coffeeCountIsLessOrEqualThanOne = coffeeCount <= 1

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
          <IncreaseOrDecreaseCoffeeQuantityButton
            coffeeCount={coffeeCount}
            onIncreaseCoffeeCount={increaseCoffeeCount}
            onDecreaseCoffeeCount={decreaseCoffeeCount}
            coffeeCountIsLessOrEqualThanOne={coffeeCountIsLessOrEqualThanOne}
            currentQuantity={quantity}
          />

          <RemoveBtn onClick={deleteCoffeeFromCart}>
            <Trash size={16} weight="bold" /> REMOVER
          </RemoveBtn>
        </ButtonsWrapper>
      </InformationWrapper>
    </CheckoutCoffeeOrderCardContainer>
  )
}
