import styled from 'styled-components'

export const OurCoffeeContainer = styled.div`
  max-width: 70rem;

  margin: 2rem auto 9.75rem auto;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeWrapper = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`
