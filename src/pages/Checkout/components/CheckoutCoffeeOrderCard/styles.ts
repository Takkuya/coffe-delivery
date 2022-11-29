import styled from 'styled-components'

export const CheckoutCoffeeOrderCardContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
  }

  padding-bottom: 2rem;
`

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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
