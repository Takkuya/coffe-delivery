import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext, useState } from 'react'
import { GetUserInformationFormContext } from '../../../../contexts/GetUserInformationFormContext'

import {
  PaymentContainer,
  PaymentWrapper,
  TextsWrapper,
  FormOfPaymentWrapper,
  FormOfPaymentButton,
} from './styles'

export const Payment = () => {
  const [paymentPreference, setPaymentePreference] = useState('')

  const { getFormOfPayment } = useContext(GetUserInformationFormContext)

  function handleIsCreditCardBtnSelected() {
    setPaymentePreference('Cartão de Crédito')
    getFormOfPayment('Cartão de Crédito')
  }

  function handleIsDebitCardBtnSelected() {
    setPaymentePreference('Cartão de Débito')
    getFormOfPayment('Cartão de Débito')
  }

  function handleIsMoneyBtnSelected() {
    setPaymentePreference('Dinheiro')
    getFormOfPayment('Dinheiro')
  }

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
        <FormOfPaymentButton
          type="button"
          onClick={handleIsCreditCardBtnSelected}
          isSelected={paymentPreference === 'Credito'}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </FormOfPaymentButton>
        <FormOfPaymentButton
          type="button"
          onClick={handleIsDebitCardBtnSelected}
          isSelected={paymentPreference === 'Debito'}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </FormOfPaymentButton>
        <FormOfPaymentButton
          type="button"
          onClick={handleIsMoneyBtnSelected}
          isSelected={paymentPreference === 'Dinheiro'}
        >
          <Money size={16} />
          DINHEIRO
        </FormOfPaymentButton>
      </FormOfPaymentWrapper>
    </PaymentContainer>
  )
}
