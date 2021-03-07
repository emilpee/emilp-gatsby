import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, PageHeader, Text } from '../styles/GlobalStyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <PageHeader>Emil Petersson</PageHeader>
      <Text style={{ margin: '.75rem' }}>
        I'm a frontend developer based in Stockholm, Sweden.{' '}
      </Text>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
