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
import { LayoutContainer, purple } from '../styles/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  const icons = [
    { type: 'fab', name: 'linkedin', url: 'https://www.linkedin.com/in/emil-petersson-5a042b114/'  },
    { type: 'fab', name: 'facebook', url: 'https://www.facebook.com/emilpee' },
    { type: 'fab', name: 'github', url: 'https://github.com/emilpee/'  },
  ] 

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.author}
          <div>
            {icons.map((icon, index) => {
              return (
                <a target='_blank' href={icon.url} title={`Visit me on ${icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}`} key={index}>
                  <FaIcon icon={[icon.type, icon.name]}/>
                </a>
              )
            })
            }
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
  transition: all .2s ease;

  &:hover {
    color: ${purple}
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
