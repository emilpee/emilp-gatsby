import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Menu = () => (
  <MenuList>
    <MenuItem>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
        Home
      </Link>
    </MenuItem>
    <MenuItem>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to="/about">
        About
      </Link>
    </MenuItem>
    <MenuItem>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to="/contact">
        Contact
      </Link>
    </MenuItem>
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

const MenuItem = styled.li``

export default Menu
