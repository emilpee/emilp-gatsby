import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, InternalLink, PageHeader, Text } from '../styles/GlobalStyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <PageHeader>Emil Petersson</PageHeader>
      <Text style={{ margin: '.75rem' }}>
        Welcome to my portfolio page. I'm a front-end developer currently based in Gothenburg, Sweden.{' '}
      </Text>
      <Text style={{ margin: '.75rem' }}>
        Want to know more about me? <InternalLink to="/about">Find out here</InternalLink>
        .
      </Text>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
