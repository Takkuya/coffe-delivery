import { Bank, CreditCard, CurrencyDollar, Money } from '@/assets'
import { OrderFormData, PaymentMethods } from '@/context'
import { Controller, useFormContext } from 'react-hook-form'

import {
  PaymentContainer,
  PaymentWrapper,
  TextsWrapper,
  FormOfPaymentWrapper,
  FormOfPaymentButton,
} from './styles'

const formsOfPayment = [
  {
    icon: CreditCard,
    value: PaymentMethods.CREDIT_CARD,
  },
  {
    icon: Bank,
    value: PaymentMethods.DEBIT_CARD,
  },
  {
    icon: Money,
    value: PaymentMethods.MONEY,
  },
]

type PaymentButtonProps = typeof formsOfPayment[number]

const PaymentButton = (props: PaymentButtonProps) => {
  const { value, icon: Icon } = props

  return (
    <FormOfPaymentButton type="button" value={value}>
      <Icon size={16} />
      {value.toUpperCase()}
    </FormOfPaymentButton>
  )
}

export const Payment = () => {
  const { control } = useFormContext<OrderFormData>()

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
        name="paymentMethod"
        render={({ field }) => {
          console.log(field.value)
          return (
            <FormOfPaymentWrapper
              onValueChange={field.onChange}
              value={field.value}
            >
              {formsOfPayment.map((paymentForm) => {
                return (
                  <PaymentButton {...paymentForm} key={paymentForm.value} />
                )
              })}
            </FormOfPaymentWrapper>
          )
        }}
      />
    </PaymentContainer>
  )
}
