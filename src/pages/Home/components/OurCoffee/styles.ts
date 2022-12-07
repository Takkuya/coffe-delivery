import styled, { css } from 'styled-components'

export const OurCoffeeContainer = styled.div`
  max-width: 70rem;

  margin-top: 25rem;

  padding: 0 2.5rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      margin-top: 5rem;
      padding: 0 2.5rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      margin: 2rem auto 9.75rem auto;
      padding: 0 0;
    }
  `}
`

export const CoffeeWrapper = styled.div`
  margin-top: 3.375rem;

  display: grid;
  gap: 2.5rem 2rem;
  justify-content: center;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: 180px 180px;
      gap: 2.5rem 4rem;
      margin: 2rem auto 9.75rem auto;
    }

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 256px);
      gap: 2.5rem 2rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(3, 256px);
    }
    @media (min-width: ${breakpoints.xl}) {
      grid-template-columns: repeat(4, 256px);
    }
  `}
`
