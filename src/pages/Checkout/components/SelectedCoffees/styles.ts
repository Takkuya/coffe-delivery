import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SelectedCoffeesWrapper = styled.div`
  border-radius: 8px 50px 8px 50px;

  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 8px;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CheckoutInfoWrapper = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    font-size: 0.875rem;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderBtn = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 800;

  border: 0;
  border-radius: 8px;

  padding: 0.875rem;

  width: 100%;

  margin-top: 1.5rem;

  transition: 0.2s all;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
