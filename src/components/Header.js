import { Link } from 'gatsby'
import Menu from './Menu'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => {
  const links = [
    {
      name: 'Home',
      link: '/',
      isActive: false,
    },
    {
      name: 'About',
      link: '/about',
      isActive: false,
    },
    {
      name: 'Contact',
      link: '/contact',
      isActive: false,
    },
  ]

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#222`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu items={links} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
