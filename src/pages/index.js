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
      <span>
        Want to know more about me?{' '}
        <InternalLink to="/about">
          Find out here
        </InternalLink>
        .
      </span>
      <span>
        If you want to send an inquiry, feel free to use my{' '}
        <InternalLink to="/contact">
          contact form
        </InternalLink>
        .
      </span>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
