import React from 'react'
import Link from 'gatsby-link'
import { purple, black } from '../styles/colors'
import styled from 'styled-components'

const Menu = ({ items }) => (
  <MenuList>
    {items.allInternalLink.nodes.map(link => {
      return (
        <MenuListItem key={link.id}>
          <MenuLink
            activeStyle={{ color: purple, borderBottom: `3px solid ${purple}` }}
            to={link.url}
          >
            {link.name}
          </MenuLink>
        </MenuListItem>
      )
    })}
  </MenuList>
)

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  min-height: 4rem;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuListItem = styled.li`
  color: ${black};
  margin-left: 2.5rem;
`

const MenuLink = styled(Link)`
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

export default Menu
