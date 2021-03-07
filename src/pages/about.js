import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container, Text, PageHeader, TextContainer } from '../styles/GlobalStyledComponents'
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
            I started my professional career as a journalist. In 2015, during a course in my
            journalism education, I came across CSS during a group assignment. I took responsibility
            for the CSS part and noticed that it was something that could have suited me.
          </Text>
          <Text>
            These thoughts were put on hold for a couple of years, but in the spring of 2018 I
            regained my interest and also started to write some basic JavaScript code. As I started
            to get tired of working as a journalist, I decided to apply for a vocational education
            as a front-end developer at{' '}
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
            My interest in web development only continued to grow, and in April 2020 I graduated
            from Medieinstitutet. After that, I became part of the front-end team at{' '}
            <a href="https://kaustik.com/" rel="noopener noreferrer" target="_blank">
              Kaustik AB
            </a>{' '}
            in Gothenburg, where I mainly worked in a React/TypeScript front end that was
            implemented in a Symfony PHP application.
          </Text>
          <Text>
            In 2021 I moved to Stockholm and I'm now a part of{' '}
            <a href="https://rhymesthlm.se/" rel="noopener noreferrer" target="_blank">
              Rhyme
            </a>
            .
          </Text>
          <Text>
            In addition to developing, I'm very fond of music. I also like to spend my time reading,
            exercising, traveling and exploring new environments. Cats, peanuts and Google Maps are
            a few of my favourite things.
          </Text>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default AboutPage
