import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container, Text, PageHeader, TextContainer } from '../styles/GlobalStyledComponents'
import { purple, lightPurple } from '../styles/colors'
import ProfileImage from '../components/ProfileImage'

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <SEO title="about" />
        <PageHeader>About me</PageHeader>
        <ProfileImage />
        <TextContainer>
          <Text>
            I started my professional career as a
            journalist. In 2015, during a course in my journalism education, I came across CSS during a group
            assignment when we were going to design a web magazine. With high
            curiosity I took responsibility for the CSS part and noticed that it was something that
            could have suited me.
          </Text>
          <Text>
            These thoughts were put on hold for a couple of years, but in the spring of 2018 I
            regained my interest and also started to write some JavaScript code. As I started to get tired of working as a journalist, I decided to apply for a vocational education as a front-end developer
            at{' '}
            <a
              href="https://medieinstitutet.se/utbildningar/front-end-developer/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Medieinstitutet
            </a>
            .
          </Text>
          <Text>
            My interest in web development only continued to grow, and in April 2020 I graduated from Medieinstitutet. Since then, I am part
            of the front-end team at{' '}
            <a href="https://kaustik.com/" rel="noopener noreferrer" target="_blank">
              Kaustik AB
            </a>
            , where I mainly work in a tech stack including React and TypeScript.
          </Text>
          <Text>
            In addition to developing, I'm very fond of music. I have been a bass player for many
            years and recently picked up the piano. In addition to that, I like to spend
            my time reading, exercising, traveling and exploring new environments. I’m also interested in
            society and politics and have a penchant for cats, peanuts and Google Maps.
          </Text>
        </TextContainer>
        <span style={{ fontWeight: 700 }}>That’s me in a nutshell!</span>
      </Container>
    </Layout>
  )
}

const BlockQuote = styled.blockquote`
  border-bottom: 1px solid ${purple};
  border-top: 1px solid ${purple};
  font-weight: 500;
  font-size: 32px;
  padding: 1.5rem 0;
  line-height: 1.6em;
  text-align: center;
  margin: 2rem auto;
  color: ${lightPurple};
  width: 100%;
`

export default AboutPage
