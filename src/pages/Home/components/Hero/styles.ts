import styled, { css } from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
`

export const BackgroundImg = styled.img`
  position: relative;

  width: 100vw;

  margin-top: -2rem;
`

export const HeroContentWrapper = styled.div`
  position: absolute;
  margin-top: 20rem;

  max-width: 70rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: none;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      margin-top: 10rem;

      margin: 0 auto;
      padding: 0;
      gap: 3.5rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      img {
        display: block;
      }
    }
  `}
`

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  font-size: 1.25rem;
  max-width: 37.5rem;

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.1;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      text-align: start;

      margin: 0 auto;
      gap: 1rem;

      img {
        display: block;
      }

      h1 {
        line-height: 1.3;
      }
    }
  `}
`

export const DeliveryInfoWrapper = styled.div`
  margin-top: 2.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;

  text-align: center;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      margin-top: 4.125rem;

      text-align: start;
    }
  `}
`

export const DeliveryItems = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      gap: 0.75rem;
    }
  `}
`

const ITEMS_ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

type ItemsIconColorsProps = {
  color: keyof typeof ITEMS_ICON_COLORS
}

export const DeliveryItemsIcon = styled.span<ItemsIconColorsProps>`
  border-radius: 50%;

  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme[ITEMS_ICON_COLORS[props.color]]};

  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.background};
  }
`
