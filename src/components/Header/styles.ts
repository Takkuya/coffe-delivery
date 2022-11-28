import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0 /*10rem */;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationBadget = styled.div`
  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  border-radius: 8px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CartButton = styled.button`
  padding: 0.63rem;
  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 0;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
