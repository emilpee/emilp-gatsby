import { Link, useStaticQuery, graphql } from 'gatsby'
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'
import React, { useState } from 'react'
import styled from 'styled-components'
import { black } from '../styles/StyledComponents'



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
      <h1 style={{ margin: 0, flex: 1, fontSize: 42, textShadow: '2px 2px #fff' }}>
        <Link
          to="/"
          style={{
            color: `${black}`,
            textDecoration: `none`,
          }}
        >
          Emil
        </Link>
      </h1>
      <Menu style={{ flex: 2 }} items={links} />
      <BurgerMenu handleMenuClick={handleMenuClick} showMenu={showMenu} items={links} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  max-width: 1024px;
  margin: 0 auto;
`

export default Header
