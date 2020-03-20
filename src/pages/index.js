import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Container = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>Welcome to my page!</h1>
      <p>
        This is an upcoming portfolio page for Emil Petersson, a front end
        developer based in Gothenburg.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
