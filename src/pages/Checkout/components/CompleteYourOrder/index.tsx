import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { GetUserAddressInformationData } from '../..'
import { Payment } from '../Payment'
import {
  AddressWrapper,
  CepInput,
  ComplementInput,
  CompleteYourOrderContainer,
  FormContainer,
  FormWrapper,
  NumberInput,
  PaymentWrapper,
  StreetInput,
  TextWrapper,
  NeighborhoodInput,
  CityInput,
  UfInput,
  ErrorMessageWrapper,
  ErrorMessage,
} from './styles'

export const CompleteYourOrder = () => {
  const { register, formState } =
    useFormContext<GetUserAddressInformationData>()

  const errorsMessage = Object.entries(formState.errors).map(([_, error]) => {
    return error?.message
  })

  return (
    <CompleteYourOrderContainer>
      <h3>Complete seu pedido</h3>
      <FormContainer>
        <AddressWrapper>
          <MapPinLine size={22} />
          <TextWrapper>
            <h5>Endereço de entrega</h5>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </TextWrapper>
        </AddressWrapper>
        <FormWrapper>
          <CepInput type="number" placeholder="CEP" {...register('cep')} />
          <StreetInput type="text" placeholder="Rua" {...register('street')} />
          <NumberInput
            type="number"
            min={1}
            placeholder="Número"
            {...register('homeNum')}
          />
          <ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <NeighborhoodInput
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <CityInput type="text" placeholder="Cidade" {...register('city')} />
          <UfInput type="text" placeholder="UF" {...register('uf')} />
        </FormWrapper>
        <ErrorMessageWrapper>
          {errorsMessage.map((error, idx) => {
            return <ErrorMessage key={idx}>{error}</ErrorMessage>
          })}
        </ErrorMessageWrapper>
      </FormContainer>
      <PaymentWrapper>
        <Payment />
      </PaymentWrapper>
    </CompleteYourOrderContainer>
  )
}
