import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container, Text, PageHeader } from '../styles/StyledComponents'
import { useStaticQuery, graphql } from 'gatsby'

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container>
        <SEO title="Not found" />
        <PageHeader>OOH NO!</PageHeader>
        <Text>It appears this route does not exist...</Text>
        <img
          style={{ filter: 'contrast(1.5)' }}
          src={data.placeholderImage.childImageSharp.fluid.src}
          alt="404"
        />
      </Container>
    </Layout>
  )
}

export default NotFoundPage
