/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { GlobalStyle } from '../styles/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faLinkedin, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faLinkedin, faFacebookSquare)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          background: 'linear-gradient(to right, #fff, #ddd)',
          boxShadow: '2px 1px 4px rgba(0, 0, 0, 0.4)',
          padding: '.75rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
          <div>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              style={{ color: '#222', fontSize: '1.8em' }}
            />
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              style={{ color: '#222', fontSize: '1.8em' }}
            />
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              style={{ color: '#222', fontSize: '1.8em' }}
            />
          </div>
        </footer>
      </div>
      <GlobalStyle />
    </>
  )
}

// TODO: lägg till props/style för fontawesome ikoner.

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
