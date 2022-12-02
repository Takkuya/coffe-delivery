import styled from 'styled-components'

export const SucessPageContainer = styled.main`
  max-width: 70rem;
  margin: 5rem auto auto auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  gap: 6.25rem;
`

export const ConfirmedOrderWrapper = styled.div`
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const DeliveryInformationWrapper = styled.div`
  margin-top: 2.5rem;

  /* border gradient */
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        45deg,
        ${(props) => props.theme.purple},
        ${(props) => props.theme.yellow}
      )
      border-box;
  border: 2px solid transparent;
  border-radius: 8px 50px 8px 50px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DeliveryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
  }

  span {
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`

const ITEMS_ICON_BGCOLORS = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

type ItemsIconBgColorsProps = {
  bgcolor: keyof typeof ITEMS_ICON_BGCOLORS
}

export const IconWrapper = styled.div<ItemsIconBgColorsProps>`
  border-radius: 500px;
  background: ${(props) => props.theme[ITEMS_ICON_BGCOLORS[props.bgcolor]]};
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  line-height: 1.3;
`

export const IllustrationWrapper = styled.div`
  img {
    margin-bottom: -1rem;
  }
`
