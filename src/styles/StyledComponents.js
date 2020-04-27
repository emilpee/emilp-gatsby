import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import '../../public/static/fonts/index.css'

// Color variables
export const purple = '#ae4fe6'
export const red = '#dd3425'
export const black = '#222'


// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Sans Pro-Regular', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, span, small {
      line-height: 1.5em;
  }

  small {
    font-size: .75em;
  }

  h1, h2 {
    margin: 0;
    letter-spacing: 1.5px;
    font-family: 'Permanent Marker', 'Source Sans Pro-SemiBold', sans-serif;
  }

  h3, h4, h5, h6 {
    margin: 0; 
    font-family: 'Source Sans Pro-SemiBold';
  }
  
`

// Styled components
export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  background: linear-gradient(to right, #fff, #ddd);
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.4);
  padding: .75rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`

export const UlList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-decoration: none;
  align-items: center;
  padding: 0.75rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`