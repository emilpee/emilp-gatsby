import styled from 'styled-components'
import Link from 'gatsby-link'
import { purple, black, lightPurple } from './colors'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background: linear-gradient(to right, #eaeaea, #fff, #fff, #eaeaea);
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.4);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.75rem;
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

export const MenuLink = styled(Link)`
  font-family: 'Source Sans Pro-SemiBold', sans-serif;
  position: relative;
  color: ${black};
  margin-left: 2.5rem;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -3px;
    left: 0;
    background: ${purple};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`
