import React from 'react'
import { MenuLink } from '../styles/StyledComponents'
import { purple } from '../styles/colors'
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
  color: #222;
  margin-left: 2.5rem;
`

export default Menu
