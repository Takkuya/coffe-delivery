import styled, { css } from 'styled-components'

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  max-width: 27.5rem;

  margin: 0 auto;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      max-width: 40rem;
    }
  `}
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

export const FormWrapper = styled.div`
  margin-top: 2.5rem;

  display: grid;
  grid-template-areas:
    'cep cep'
    'street street'
    'number complement'
    'neighborhood city'
    'uf uf';
  gap: 1rem 0.875rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      grid-template-areas:
        'cep . .'
        'street street street'
        'number complement complement'
        'neighborhood city uf';
    }
  `}
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 8px;
  color: ${(props) => props.theme['base-label']};
  padding: 0.875rem;

  max-width: 10.5rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      max-width: 100%;
    }
  `}
`

const SoloInput = styled(BaseInput)`
  max-width: 249px;
`

export const CepInput = styled(SoloInput)`
  grid-area: cep;
`
export const StreetInput = styled(SoloInput)`
  grid-area: street;
  max-width: 100%;
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
  max-width: 249px;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      max-width: 5rem;
    }
  `}
`

export const PaymentWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
`
