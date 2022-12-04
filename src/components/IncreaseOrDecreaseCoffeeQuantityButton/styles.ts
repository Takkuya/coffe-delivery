import styled from 'styled-components'

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
