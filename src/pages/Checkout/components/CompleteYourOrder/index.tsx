import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
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
} from './styles'

export const CompleteYourOrder = () => {
  const { register, formState } = useFormContext()

  //   const legal = Object.entries(formState.errors)

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
          <CepInput type="text" placeholder="CEP" {...register('cep')} />
          <StreetInput type="text" placeholder="Rua" {...register('street')} />
          <NumberInput
            type="text"
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
        {/* <div>
          {legal !== {}
            ? legal.map((lega) => {
                return <h1>{lega}</h1>
              })
            : null}
        </div> */}
      </FormContainer>
      <PaymentWrapper>
        <Payment />
      </PaymentWrapper>
    </CompleteYourOrderContainer>
  )
}
