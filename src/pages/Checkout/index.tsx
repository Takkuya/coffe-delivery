import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  GetUserInformationFormContext,
  UserAddress,
} from '../../contexts/GetUserInformationFormContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const getUserAddressInformationValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'CEP deve conter 8 dígitos')
    .max(8, 'CEP deve conter 8 dígitos'),
  street: zod.string().min(1, 'Nome da rua obrigatório'),
  homeNum: zod.string().min(1, 'Número obrigatório'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Bairro obrigatório'),
  city: zod.string().min(1, 'Cidade obrigatório'),
  uf: zod
    .string()
    .min(2, 'UF deve ter 2 caracteres')
    .max(2, 'UF deve ter 2 caracteres'),
})

export type GetUserAddressInformationData = zod.infer<
  typeof getUserAddressInformationValidationSchema
>

export const Checkout = () => {
  const getUserAddressInformation = useForm<GetUserAddressInformationData>({
    resolver: zodResolver(getUserAddressInformationValidationSchema),
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

  const { handleSubmit, reset } = getUserAddressInformation
  const { getUserAddress } = useContext(GetUserInformationFormContext)
  const navigate = useNavigate()

  function handleGetUserAddressInformation(data: UserAddress) {
    getUserAddress(data)

    reset()

    navigate('/success')
  }

  return (
    <CheckoutContainer
      onSubmit={handleSubmit(handleGetUserAddressInformation)}
      action=""
    >
      <FormProvider {...getUserAddressInformation}>
        <CompleteYourOrder />
      </FormProvider>
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
