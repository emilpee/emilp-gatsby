import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, InternalLink } from '../styles/StyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>Welcome to my page</h1>
      <p>
        This is a portfolio page for Emil Petersson, a front-end developer based in Gothenburg.{' '}
      </p>
      <div>
        Want to know more about me? <InternalLink to="/about">Find out here</InternalLink>.
      </div>
      <div>
        If you want to send an inquiry, feel free to use my{' '}
        <InternalLink to="/contact">contact form</InternalLink>.
      </div>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
