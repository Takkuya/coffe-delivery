import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const TextsWrapper = styled.div`
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

export const FormOfPaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

export const FormOfPaymentButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.875rem;

  white-space: nowrap;

  border-radius: 8px;
  border: 0;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`
