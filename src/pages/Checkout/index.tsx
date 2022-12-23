import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { orderFormSchema, useCartContext } from '@/context'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const Checkout = () => {
  const cart = useCartContext()

  const orderForm = useForm({
    resolver: zodResolver(orderFormSchema),
    defaultValues: cart.order
  })

  
  const navigate = useNavigate()


  const onSubmit = orderForm.handleSubmit((values) => {
      cart.onSubmitOrder(values)
      orderForm.reset()

      navigate('/success')
  })

  return (
    <CheckoutContainer
      onSubmit={onSubmit}
      action=""
    >
      <FormProvider {...orderForm}>
        <CompleteYourOrder />
      </FormProvider>
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
