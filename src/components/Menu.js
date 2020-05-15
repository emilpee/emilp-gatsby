import React from 'react'
import { MenuLink, purple } from '../styles/StyledComponents'
import styled from 'styled-components'

const Menu = ({ items }) => (
  <MenuList>
    {items.map((item, index) => {
      return (
        <MenuListItem key={index}>
          <MenuLink
            activeStyle={{ color: purple, borderBottom: `3px solid ${purple}` }}
            to={item.link}
          >
            {item.name}
          </MenuLink>
        </MenuListItem>
      )
    })}
  </MenuList>
)

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  align-items: center;
  margin: 0;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuListItem = styled.li`
  color: #222;
`

export default Menu
