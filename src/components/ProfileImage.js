import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "emil.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <ProfileImg
        alt={'Picture of Emil Petersson'}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </>
  )
}

const ProfileImg = styled(Img)`
  background: #fff;
  border-radius: 20px;
  margin-top: 0.5rem;
  width: 300px;
`

export default ProfileImage
