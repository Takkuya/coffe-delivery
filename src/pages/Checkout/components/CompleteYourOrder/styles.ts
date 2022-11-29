import styled from 'styled-components'

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  max-width: 40rem;
  margin: 0 auto;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 8px;
`

export const AddressWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    line-height: 1.6;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormWrapper = styled.form`
  margin-top: 2.5rem;

  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
  gap: 1rem 0.875rem;
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 8px;
  color: ${(props) => props.theme['base-label']};
  padding: 0.875rem;
`

export const CepInput = styled(BaseInput)`
  grid-area: cep;
`
export const StreetInput = styled(BaseInput)`
  grid-area: street;
`
export const NumberInput = styled(BaseInput)`
  grid-area: number;
`
export const ComplementInput = styled(BaseInput)`
  grid-area: complement;
`
export const NeighborhoodInput = styled(BaseInput)`
  grid-area: neighborhood;
`
export const CityInput = styled(BaseInput)`
  grid-area: city;
`
export const UfInput = styled(BaseInput)`
  grid-area: uf;
  max-width: 5rem;
`

export const FormAddressWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 85%;
  gap: 0 0.875rem;
`

export const FormCityWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 60% 10%;
  gap: 0 0.875rem;
`

export const PaymentWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
`
