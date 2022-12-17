import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'

import {
  PaymentContainer,
  PaymentWrapper,
  TextsWrapper,
  FormOfPaymentWrapper,
  FormOfPaymentButton,
} from './styles'

export const Payment = () => {
  const { control } = useFormContext()

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
      <Controller
        control={control}
        name="formOfPayment"
        render={({ field }) => {
          return (
            <FormOfPaymentWrapper
              onValueChange={field.onChange}
              value={field.value}
            >
              <FormOfPaymentButton type="button" value="Cartão de Crédito">
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </FormOfPaymentButton>
              <FormOfPaymentButton type="button" value="Cartão de Débito">
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </FormOfPaymentButton>
              <FormOfPaymentButton type="button" value="Dinheiro">
                <Money size={16} />
                DINHEIRO
              </FormOfPaymentButton>
            </FormOfPaymentWrapper>
          )
        }}
      />
    </PaymentContainer>
  )
}
