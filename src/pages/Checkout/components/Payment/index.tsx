import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentContainer,
  PaymentWrapper,
  TextsWrapper,
  FormOfPaymentWrapper,
  FormOfPaymentButton,
} from './styles'

export const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentWrapper>
        <CurrencyDollar size={22} />
        <TextsWrapper>
          <h5>Pagamento</h5>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </TextsWrapper>
      </PaymentWrapper>
      <FormOfPaymentWrapper>
        <FormOfPaymentButton>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </FormOfPaymentButton>
        <FormOfPaymentButton>
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </FormOfPaymentButton>
        <FormOfPaymentButton>
          <Money size={16} />
          DINHEIRO
        </FormOfPaymentButton>
      </FormOfPaymentWrapper>
    </PaymentContainer>
  )
}
