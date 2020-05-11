import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, MenuLink } from '../styles/StyledComponents'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>Welcome to my page</h1>
      <p>
        This is a portfolio page for Emil Petersson, a front-end developer based in Gothenburg.{' '}
      </p>
      <span>
        Want to know more about me? <MenuLink to="/about">Find out here</MenuLink>.
      </span>
      <span>
        If you want to send an inquiry, feel free to use my{' '}
        <MenuLink to="/contact">contact form</MenuLink>.
      </span>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
