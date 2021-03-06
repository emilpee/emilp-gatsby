import { createGlobalStyle } from 'styled-components'
import { purple, black, lightPurple } from './colors'

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-size: 1.2em;
    font-family: 'Source Sans Pro-Regular', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, span, small {
      color: ${black};
      line-height: 1.75em;
      text-decoration: none;
  }

  a {
    color: ${lightPurple};
    text-decoration: none;

    &:hover {
      color: ${purple};
    }
  }

  label {
    font-family: 'Permanent Marker', sans-serif;
  }

  small {
    font-size: .75em;
  }

  h1 {
    margin: 0;
    letter-spacing: 1.5px;
    font-family: 'Permanent Marker';
  }

  h2 {
    margin: 2rem;
    letter-spacing: 1.5px;
    font-family: 'Permanent Marker', 'Source Sans Pro-SemiBold', sans-serif;
  }

  h3, h4, h5, h6 {
    margin: 0; 
    font-family: 'Source Sans Pro-SemiBold';
  }

  ::selection {
    background: ${purple};
    color: #fff;
  }
  
`
