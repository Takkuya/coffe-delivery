import styled from 'styled-components'

export const CoffeeCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 8px 36px 8px 36px;

  max-width: 16rem;
`

export const CoffeeImgWrapper = styled.div`
  margin-top: -1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`

export const CoffeeImg = styled.img``

export const CoffeeBadgetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeBadget = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 16px;

  font-weight: 700;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
`

export const BodyWrapper = styled.body`
  background: ${(props) => props.theme['base-card']};

  padding: 1rem 1.25rem 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 0 1.25rem 1.25rem 1.25rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CurrencyText = styled.span`
  font-size: 0.875rem;
`

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2', sans-serif;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

export const IncreaseOrDescreseCoffeeQuantityWrapper = styled.div`
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
  }

  svg {
    color: ${(props) => props.theme.purple};
    transition: 0.2s all;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CartBtn = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  border: 0;

  line-height: 0;

  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['base-card']};
  }

  transition: 0.2s all;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
