import React from 'react'
import { MenuLink } from '../styles/StyledComponents'
import styled from 'styled-components'

const Menu = ({ items }) => (
  <MenuList>
    {items.map((item, index) => {
      return (
        <MenuItem key={index}>
          <MenuLink activeStyle={{ fontWeight: 700 }} to={item.link}>
            {item.name}
          </MenuLink>
        </MenuItem>
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

const MenuItem = styled.li`
  color: #222;
`

export default Menu
