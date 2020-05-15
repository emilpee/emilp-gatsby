import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Projects from '../components/Projects'
import { Container, MenuLink, purple } from '../styles/StyledComponents'

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
        <Link style={{ color: purple }} to="/about">
          Find out here
        </Link>
        .
      </span>
      <span>
        If you want to send an inquiry, feel free to use my{' '}
        <Link style={{ color: purple }} to="/contact">
          contact form
        </Link>
        .
      </span>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
