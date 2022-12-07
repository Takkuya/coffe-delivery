import styled, { css } from 'styled-components'

export const CheckoutCoffeeOrderCardContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 1.25rem;

  max-width: 27.5rem;

  img {
    width: 4rem;
  }

  padding-bottom: 2rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      max-width: 40rem;
    }
  `}
`

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TextsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 3.125rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 0.25rem;

  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme['base-button']};
  padding: 0.69rem;

  transition: 0.2s all;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const IncreaseOrDescreseCoffeeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  span {
    color: ${(props) => props.theme['base-title']};
  }

  button {
    border: 0;
    line-height: 0;
    background: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
    transition: 0.2s all;

    svg:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
