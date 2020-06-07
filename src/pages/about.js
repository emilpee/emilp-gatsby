import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container, Text, PageHeader } from '../styles/GlobalStyledComponents'
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
            I come from a small village called Jämjö in southern Sweden. I started my career as a
            journalist, but realized quickly after graduation that maybe it was not something for
            me. Even though I saw great pleasure in being creative at work and express myself in
            writing, I somehow couldn’t relate to the professional role. After some temporary jobs
            and a longer trip abroad, I came home unemployed and started to think about my future.
          </Text>
          <Text>
            In 2015, during a course in my journalism education, I came across CSS during a group
            assignment when we were going to design and publish our own web magazine. With high
            curiosity I took responsibility for the CSS part and noticed that it was something that
            could have suited me.
          </Text>
          <BlockQuote>
            "I took responsibility for the CSS part and noticed that it was something that could
            have suited me."
          </BlockQuote>
          <Text>
            These thoughts were postponed for a couple of years, but in the spring of 2018 I
            regained my interest and also started to write some basic JavaScript code. In my
            confusing state, I decided to apply for a vocational education as a front-end developer
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
            My interest in web development only continued to grow, and in April 2020 I finished my
            two year studies from the higher vocational education in front end development. This
            time, I really feel like I’m on the right track in my career. Since May 2020 I am part
            of the front-end team at{' '}
            <a href="https://kaustik.com/" rel="noopener noreferrer" target="_blank">
              Kaustik AB
            </a>
            , where I mainly work in a tech stack including React and TypeScript.
          </Text>
          <Text>
            In addition to developing, I am very fond of music. I have been a bass player for many
            years and have started learning to play the piano. In addition to that, I like to spend
            my time reading, traveling and exploring new environments. I’m also interested in
            society and politics and have a penchant for quizzes and peanuts.
          </Text>
        </TextContainer>
        <span style={{ fontWeight: 700 }}>That’s me in a (pea)nutshell!</span>
      </Container>
    </Layout>
  )
}

const TextContainer = styled.div`
  padding: 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

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
