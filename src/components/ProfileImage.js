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
  border-radius: 0.75rem;
  box-shadow: 2px 5px 8px #777;
  height: 300px;
  margin-top: 1rem;
  width: 300px;
`

export default ProfileImage