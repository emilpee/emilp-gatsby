import React, { useState } from 'react'
import Link from 'gatsby-link'
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

const MenuLink = styled(Link)`
  font-family: 'Source Sans Pro-SemiBold', sans-serif;
  position: relative;
  color: #222;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -3px;
    left: 0;
    background: linear-gradient(to right, #ddd, #ccc);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

export default Menu
