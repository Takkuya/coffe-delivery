import { IncreaseOrDecreaseCoffeeButton } from '../../../../components/IncreaseOrDecreaseCoffeQuantityButton'
import {
  CheckoutCoffeeOrderCardContainer,
  InformationWrapper,
  TextsWrapper,
  ButtonsWrapper,
  RemoveBtn,
} from './styles'

import coffeImg from '../../../../assets/imgs/coffee/americano.png'
import { Trash } from 'phosphor-react'

export const CheckoutCoffeeOrderCard = () => {
  return (
    <CheckoutCoffeeOrderCardContainer>
      <img src={coffeImg} alt="" />
      <InformationWrapper>
        <TextsWrapper>
          <p>Expresso tradicional</p>
          <span>RS 9,90</span>
        </TextsWrapper>
        <ButtonsWrapper>
          <IncreaseOrDecreaseCoffeeButton />
          <RemoveBtn>
            <Trash size={16} weight="bold" /> REMOVER
          </RemoveBtn>
        </ButtonsWrapper>
      </InformationWrapper>
    </CheckoutCoffeeOrderCardContainer>
  )
}
