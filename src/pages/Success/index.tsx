import {
  ConfirmedOrderWrapper,
  DeliveryInformationWrapper,
  DeliveryItemWrapper,
  IconWrapper,
  IllustrationWrapper,
  SucessPageContainer,
  TextWrapper,
} from './styles'
import { SuccessIllustration, Timer, CurrencyDollar, MapPin } from '@/assets'
import { useCartContext } from '@/context'

export const Success = () => {
  const orderInfo = useCartContext().order

  return (
    <SucessPageContainer>
      <ConfirmedOrderWrapper>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <DeliveryInformationWrapper>
          <DeliveryItemWrapper>
            <IconWrapper bgcolor="purple">
              <MapPin size={16} weight="fill" />
            </IconWrapper>
            <TextWrapper>
              <p>
                Entrega em{' '}
                <span>
                  {orderInfo.street}, {orderInfo.number}
                </span>
              </p>
              <p>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.UF}
              </p>
            </TextWrapper>
          </DeliveryItemWrapper>
          <DeliveryItemWrapper>
            <IconWrapper bgcolor="yellow">
              <Timer size={16} weight="fill" />
            </IconWrapper>
            <TextWrapper>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </TextWrapper>
          </DeliveryItemWrapper>
          <DeliveryItemWrapper>
            <IconWrapper bgcolor="yellow-dark">
              <CurrencyDollar size={16} weight="bold" />
            </IconWrapper>
            <TextWrapper>
              <p>Pagamento na entrega</p>
              <span>{orderInfo.paymentMethod}</span>
            </TextWrapper>
          </DeliveryItemWrapper>
        </DeliveryInformationWrapper>
      </ConfirmedOrderWrapper>
      <IllustrationWrapper>
        <img
          src={SuccessIllustration}
          alt="Ilustração de um entregador em uma moto"
        />
      </IllustrationWrapper>
    </SucessPageContainer>
  )
}
