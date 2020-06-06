import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, InternalLink, PageHeader, Text } from '../styles/StyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <PageHeader>Hello there!</PageHeader>
      <Text style={{ margin: '.75rem' }}>
        This is a portfolio page for Emil Petersson, a front-end developer based in Gothenburg.{' '}
      </Text>
      <Text style={{ margin: '.75rem' }}>
        Want to know more about me? <InternalLink to="/about">Find out here</InternalLink>.
      </Text>
      <Text style={{ margin: '.75rem' }}>
        If you want to send an inquiry, feel free to use my{' '}
        <InternalLink to="/contact">contact form</InternalLink>.
      </Text>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
