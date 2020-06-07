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
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { GlobalStyle } from '../styles/GlobalStyles'
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
      file(base: { eq: "background.jpg" }) {
        publicURL
      }
    }
  `)

  const Background = styled.div`
    background: url(${data.file ? data.file.publicURL : '../images/background.jpg'}) no-repeat
      center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    overflow: hidden;
    padding-bottom: 1.5rem;

    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    }
  `

  const MainContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
  `

  const LayoutContainer = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    background: linear-gradient(to right, #eaeaea, #fff, #fff, #eaeaea);
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.4);
  `

  return (
    <Background>
      <MainContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutContainer>
          <main>{children}</main>
          <Footer />
        </LayoutContainer>
        <GlobalStyle />
      </MainContainer>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
