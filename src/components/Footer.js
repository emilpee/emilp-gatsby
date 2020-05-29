import React from 'react'
import styled from 'styled-components'
import { purple } from '../styles/colors'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const icons = useStaticQuery(graphql`
    query {
      allFontAwesomeIcon {
        nodes {
          name
          type
          id
          url
        }
      }
    }
  `)

  const allIcons = icons.allFontAwesomeIcon.nodes

  return (
    <FooterContainer>
      <span>© {new Date().getFullYear()} Emil Petersson</span>
      <div>
        {allIcons.map(icon => {
          const { name, url, type } = icon
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              title={`Visit me on ${name}`}
              key={name}
            >
              <FaIcon icon={[type, name]} />
            </a>
          )
        })}
      </div>
    </FooterContainer>
  )
}

const FaIcon = styled(FontAwesomeIcon)`
  color: #222;
  font-size: 1.5em;
  margin: 0 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${purple};
  }
`

const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0 auto;

  & span {
    color: #222;
  }
`
export default Footer
