import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 2.5rem /*10rem */;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      padding: 0.63rem;
      background-color: ${(props) => props.theme['yellow-light']};

      display: flex;
      align-items: center;

      border-radius: 8px;
      border: 0;

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      padding: 2rem 2.5rem;
    }
    @media (min-width: ${breakpoints.xl}) {
      padding: 2rem 0;
    }
  `}
`

export const CartItensQuantity = styled.span`
  margin: -0.3rem -10rem 0 2.3rem;
  position: absolute;

  background-color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.75rem;
  font-weight: 800;
  color: ${(props) => props.theme.background};

  border-radius: 100%;
  padding: 0.25rem 0.4rem;

  width: 15px;
  height: 15px;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      margin: -0.5rem -10rem 0 2rem;

      width: 20px;
      height: 20px;
    }
  `}
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

export const ButtonWrapper = styled.div``
