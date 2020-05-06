import { Link } from 'gatsby'
import Menu from './Menu'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { black } from '../styles/StyledComponents'

const Header = ({ siteTitle }) => {
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
    <header>
      <HeaderContainer>
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: `${black}`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu style={{ flex: 2 }} items={links} />
      </HeaderContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 0.75rem;
`

export default Header
