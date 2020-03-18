import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my page!</h1>
    <p>
      This is an upcoming portfolio page for Emil Petersson, a front end
      developer based in Gothenburg.
    </p>
  </Layout>
)

export default IndexPage
