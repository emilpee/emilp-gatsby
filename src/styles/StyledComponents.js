import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    font-family: 'Verdana';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, span {
      line-height: 1.5em;
  }
  
  small {
    font-size: .75em;
  }
`

export const Container = styled.div`
  background: #fff;
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
