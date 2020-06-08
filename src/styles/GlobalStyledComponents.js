import styled from 'styled-components'
import Link from 'gatsby-link'
import { purple, lightPurple } from './colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.75rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
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

export const InternalLink = styled(Link)`
  color: ${lightPurple};
  transition: color 0.2s ease;

  &:hover {
    color: ${purple};
  }
`

export const Text = styled.p`
  margin: 1.75rem 0;
`

export const PageHeader = styled.h1`
  margin: 1rem;
`

export const TextContainer = styled.div`
  padding: 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`
