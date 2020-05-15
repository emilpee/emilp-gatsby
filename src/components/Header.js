import { Link } from 'gatsby'
import Menu from './Menu'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { black, lightPurple } from '../styles/StyledComponents'

const Header = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ]

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
