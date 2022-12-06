import {
  CheckoutCoffeeOrderCardContainer,
  InformationWrapper,
  TextsWrapper,
  ButtonsWrapper,
  RemoveBtn,
  IncreaseOrDescreseCoffeeButtonWrapper,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { coffees } from '../../../../components/Coffees'

type CheckoutCoffeeOrderCardProps = {
  id: string
  quantity: number
}

export const CheckoutCoffeeOrderCard = ({
  id,
  quantity,
}: CheckoutCoffeeOrderCardProps) => {
  const { handleDeleteCoffeeFromCart, handleCoffeeCurrentQuantity } =
    useContext(CartContext)

  const [coffeeCurrentQuantity, setCoffeeCurrentQuantity] = useState(quantity)

  const { name, price, img } = coffees[id]

  function increaseCoffeeQuantity() {
    setCoffeeCurrentQuantity((state) => state + 1)

    // idk why i need this + 1
    handleCoffeeCurrentQuantity(id, coffeeCurrentQuantity + 1)
  }

  function decreaseCoffeeQuantity() {
    setCoffeeCurrentQuantity((state) => state - 1)

    handleCoffeeCurrentQuantity(id, coffeeCurrentQuantity - 1)
  }

  function deleteCoffeeFromCart() {
    handleDeleteCoffeeFromCart(id)
  }

  const coffeeQuantityIsLessOrEqualThanOne = coffeeCurrentQuantity <= 1

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
              onClick={decreaseCoffeeQuantity}
              disabled={coffeeQuantityIsLessOrEqualThanOne}
            >
              <Minus size={16} weight="bold" />
            </button>
            <span>{coffeeCurrentQuantity}</span>
            <button onClick={increaseCoffeeQuantity}>
              <Plus size={16} weight="bold" />
            </button>
          </IncreaseOrDescreseCoffeeButtonWrapper>

          <RemoveBtn onClick={deleteCoffeeFromCart}>
            <Trash size={16} weight="bold" /> REMOVER
          </RemoveBtn>
        </ButtonsWrapper>
      </InformationWrapper>
    </CheckoutCoffeeOrderCardContainer>
  )
}
