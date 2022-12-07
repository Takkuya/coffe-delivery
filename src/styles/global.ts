import { createGlobalStyle, css } from 'styled-components'

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }

  html {
    font-size: 70%;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      html {
        font-size: 100%;
      }
    }
  `}
`
