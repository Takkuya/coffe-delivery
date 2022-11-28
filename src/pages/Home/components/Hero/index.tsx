import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  DeliveryInfoWrapper,
  DeliveryItems,
  DeliveryItemsIcon,
  HeroContainer,
  TextsWrapper,
  HeroContentWrapper,
  BackgroundImg,
} from './styles'

import HomeCoffeImg from '../../../../assets/imgs/homeCoffeImg.png'
import HomeBackgroundImg from '../../../../assets/imgs/BackgroundImg.png'

export const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImg src={HomeBackgroundImg} alt="" />

      <HeroContentWrapper>
        <div>
          <TextsWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </TextsWrapper>

          <DeliveryInfoWrapper>
            <DeliveryItems>
              <DeliveryItemsIcon color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </DeliveryItemsIcon>
              Compra simples e segura
            </DeliveryItems>
            <DeliveryItems>
              <DeliveryItemsIcon color="gray">
                <Package size={16} weight="fill" />
              </DeliveryItemsIcon>
              Embalagem mantém o café intacto
            </DeliveryItems>
            <DeliveryItems>
              <DeliveryItemsIcon color="yellow">
                <Timer size={16} weight="fill" />
              </DeliveryItemsIcon>
              Entrega rápida e segura
            </DeliveryItems>
            <DeliveryItems>
              <DeliveryItemsIcon color="purple">
                <Coffee size={16} weight="fill" />
              </DeliveryItemsIcon>
              O café chega fresquinho até você
            </DeliveryItems>
          </DeliveryInfoWrapper>
        </div>
        <div>
          <img src={HomeCoffeImg} alt="foda" />
        </div>
      </HeroContentWrapper>
    </HeroContainer>
  )
}
