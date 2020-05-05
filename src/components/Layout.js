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
import Footer from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { GlobalStyle } from '../styles/StyledComponents'
import { LayoutContainer } from '../styles/StyledComponents'
import { fab, faLinkedin, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faLinkedin, faFacebookSquare)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
