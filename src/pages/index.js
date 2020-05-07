import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container } from '../styles/StyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>Welcome to my page</h1>
      <p>
        This is an upcoming portfolio page for Emil Petersson, a front end developer based in
        Gothenburg.
      </p>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
