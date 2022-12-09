import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const getUserAddressInformationValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'Informe um CEP válido'),
  street: zod.string().min(1, 'Insira o nome de uma rua'),
  homeNum: zod.string().min(1, 'Insira o número da sua residência'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Insira o nome de um bairro'),
  city: zod.string().min(1, 'Insira o nome de uma cidade'),
  uf: zod.string().min(2, 'Insira um UF').max(2, 'Insira um UF'),
})

type GetUserAddressInformationData = zod.infer<
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

  const { handleSubmit, reset, formState } = getUserAddressInformation

  console.log(formState.errors)

  function handleGetUserAddressInformation(data: any) {
    console.log('log', data)

    reset()
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
