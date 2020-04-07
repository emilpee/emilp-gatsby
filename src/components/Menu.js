import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  align-items: center;
  padding: 0.75rem;
  margin: 0;
`

const Menu = () => (
  <nav
    style={{
      background: 'rgba(0, 0, 0, .8)',
    }}
  >
    <MenuList>
      <li>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/contact">
          Contact
        </Link>
      </li>
    </MenuList>
  </nav>
)

export default Menu
