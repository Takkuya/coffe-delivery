import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  GetOrderInformationFormContext,
  OrderInformation,
} from '../../contexts/GetOrderInformationFormContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const getOrderInformationValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string().min(1, 'Nome da rua obrigatório'),
  homeNum: zod.string().min(1, 'Número obrigatório'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Bairro obrigatório'),
  city: zod.string().min(1, 'Cidade obrigatório'),
  uf: zod
    .string()
    .min(2, 'UF deve ter 2 caracteres')
    .max(2, 'UF deve ter 2 caracteres'),
  formOfPayment: zod.enum([
    'Cartão de Crédito',
    'Cartão de Débito',
    'Dinheiro',
  ]),
})

export type GetOrderInformationData = zod.infer<
  typeof getOrderInformationValidationSchema
>

export const Checkout = () => {
  const getCheckoutInformation = useForm<GetOrderInformationData>({
    resolver: zodResolver(getOrderInformationValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      homeNum: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = getCheckoutInformation
  const { getOrderInformation } = useContext(GetOrderInformationFormContext)
  const navigate = useNavigate()

  function handleGetOrderInformation(data: OrderInformation) {
    getOrderInformation(data)

    reset()

    navigate('/success')
  }

  return (
    <CheckoutContainer
      onSubmit={handleSubmit(handleGetOrderInformation)}
      action=""
    >
      <FormProvider {...getCheckoutInformation}>
        <CompleteYourOrder />
      </FormProvider>
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
