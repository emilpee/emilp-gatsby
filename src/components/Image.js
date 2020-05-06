import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

// TODO: import higher quality img

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "emil.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ProfileImg
      alt={'Picture of Emil Petersson'}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const ProfileImg = styled(Img)`
  border-radius: 9999rem;
  box-shadow: 3px 6px 8px #777;
  margin-top: 0.5rem;
  width: 200px;
`

export default Image
