import styled from 'styled-components'

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

  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  font-size: 1.25rem;

  max-width: 37.5rem;

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
  }
`

export const DeliveryInfoWrapper = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;
`

export const DeliveryItems = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
