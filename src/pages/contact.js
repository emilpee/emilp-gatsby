import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Form from '../components/Form'
import { Container, Text, PageHeader } from '../styles/StyledComponents'

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="contact" />
      <PageHeader>Contact</PageHeader>
      <Text>Send me a message! I will reply in no time.</Text>
      <Form />
    </Container>
  </Layout>
)

export default ContactPage
