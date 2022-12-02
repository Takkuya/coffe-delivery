import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ConfirmedOrderWrapper,
  DeliveryInformationWrapper,
  DeliveryItemWrapper,
  IconWrapper,
  IllustrationWrapper,
  SucessPageContainer,
  TextWrapper,
} from './styles'

import SuccessIllustration from '../../assets/SuccessIllustration.svg'

export const Success = () => {
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
                Entrega em <span>Rua João Augusto Navarro, 108</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
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
