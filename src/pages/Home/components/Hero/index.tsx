import {
  DeliveryInfoWrapper,
  DeliveryItems,
  DeliveryItemsIcon,
  HeroContainer,
  TextsWrapper,
  HeroContentWrapper,
  BackgroundImg,
} from './styles'
import {
  HeroSectionBackground,
  HeroSectionCoffee,
  ShoppingCart,
  Package,
  Timer,
  Coffee,
} from '@/assets'

export const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImg src={HeroSectionBackground} alt="" />

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
          <img src={HeroSectionCoffee} alt="foda" />
        </div>
      </HeroContentWrapper>
    </HeroContainer>
  )
}
