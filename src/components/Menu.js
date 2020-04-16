import React, { useState } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Menu = ({ items }) => {
  return (
    <MenuList>
      {items.map((item, index) => {
        return (
          <MenuItem key={index}>
            <MenuLink
              onClick={!items[index].isActive ? true : false}
              style={{ fontWeight: `${items[index].isActive ? 700 : 400}` }}
              to={item.link}
            >
              {item.name}
            </MenuLink>
          </MenuItem>
        )
      })}
    </MenuList>
  )
}

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
  color: #fff;
`

const MenuLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -3px;
    left: 0;
    background: #fff;
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
