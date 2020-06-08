import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Form from '../components/Form'
import { Container, Text, PageHeader, TextContainer } from '../styles/GlobalStyledComponents'

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="contact" />
      <PageHeader>Contact</PageHeader>
      <TextContainer>
        <Text>Send me a message – I promise to reply in no time.</Text>
      </TextContainer>
      <Form />
    </Container>
  </Layout>
)

export default ContactPage
