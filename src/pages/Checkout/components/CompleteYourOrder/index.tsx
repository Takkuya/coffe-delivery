import { MapPinLine } from 'phosphor-react'
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
          <CepInput type="number" placeholder="CEP" />
          <StreetInput type="text" placeholder="Rua" />
          <NumberInput type="number" placeholder="Número" />
          <ComplementInput type="text" placeholder="Complemento" />
          <NeighborhoodInput type="text" placeholder="Bairro" />
          <CityInput type="text" placeholder="Cidade" />
          <UfInput type="text" placeholder="UF" />
        </FormWrapper>
      </FormContainer>
      <PaymentWrapper>
        <Payment />
      </PaymentWrapper>
    </CompleteYourOrderContainer>
  )
}
