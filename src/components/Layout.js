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
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { GlobalStyle } from '../styles/StyledComponents'
import { LayoutContainer } from '../styles/StyledComponents'
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

  const icons = [
    ['fab', 'github'],
    ['fab', 'linkedin'],
    ['fab', 'facebook']
  ] 

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
          <div>
            {icons.flatMap((icon, index) => <FaIcon key={index} icon={icon}/>)}
          </div>
        </Footer>
      </LayoutContainer>
      <GlobalStyle />
    </>
  )
}


const FaIcon = styled(FontAwesomeIcon)`
  color: '#222';
  font-size: 1.5em;
  margin: 0 .25rem;

  &:hover {

  }
`

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
