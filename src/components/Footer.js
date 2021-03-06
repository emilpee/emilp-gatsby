import React from 'react'
import styled from 'styled-components'
import { purple, black } from '../styles/colors'
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
      <FaIconContainer>
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
      </FaIconContainer>
    </FooterContainer>
  )
}

const FaIcon = styled(FontAwesomeIcon)`
  color: ${black};
  font-size: 1.35em;
  margin-top: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${purple};
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-left: 1rem;
  }
`

const FaIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  flex: 1;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  background: rgba(0, 0, 0, 0.05);
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 3rem;
  padding: 0 1rem;

  & span {
    color: ${black};
    flex: 7;
    font-size: 0.8em;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`
export default Footer
