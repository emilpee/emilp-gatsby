import { Link, useStaticQuery, graphql } from 'gatsby'
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'
import React, { useState } from 'react'
import styled from 'styled-components'
import { black } from '../styles/colors'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }
  const links = useStaticQuery(
    graphql`
      query {
        allInternalLink {
          nodes {
            id
            url
            name
          }
        }
      }
    `
  )
  return (
    <HeaderContainer>
      <Title>
        <Link
          to="/"
          style={{
            color: `${black}`,
            textDecoration: `none`,
          }}
        >
          Emil
        </Link>
      </Title>
      <Menu items={links} />
      <BurgerMenu handleMenuClick={handleMenuClick} showMenu={showMenu} items={links} />
    </HeaderContainer>
  )
}

const Title = styled.h1`
  margin: 0;
  font-size: 44px;
  text-shadow: 2px 2px #fff;
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  margin: 0 auto;
`

export default Header
