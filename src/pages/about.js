import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container } from '../styles/StyledComponents'
import { purple } from '../styles/colors'
import styled from 'styled-components'
import ProfileImage from '../components/ProfileImage'

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <SEO title="about" />
        <h1>About me</h1>
        <ProfileImage />
        <TextContainer>
          <BlockQuote>
            "I took responsibility for the CSS part and noticed that it was something that could
            have suited me."
          </BlockQuote>
          <p>
            I started my career as a journalist, but realized relatively quickly after graduation
            that maybe it was not something for me. Well, I saw great pleasure in being creative at
            work and express myself with writing, but somehow I couldn’t relate to the professional
            role. After some temporary jobs and a longer trip abroad, I came home unemployed, and
            started to think about my future.
          </p>
          <p>
            In 2015, during a course in my journalism education, I came across CSS during a group
            assignment when we were going to design and publish our own web magazine. With high
            curiosity I took responsibility for the CSS part and noticed that it was something that
            could have suited me.
          </p>
          <p>
            These thoughts were put on ice for a couple of years, but in the spring of 2018 I
            regained my interest and also started to write some basic JavaScript code. In my
            confusing state, I decided to apply for a vocational education as a front-end developer.
          </p>
          <p>
            My interest in web development only continued to grow, and in April 2020 I finished my
            two year studies from the higher vocational education in front end development. This
            time, I really feel like I’m on the right track in my career.
          </p>
          <p>
            In addition to developing, I am very fond of music. I have been a bass player for many
            years and am interested in resuming this interest to a slightly more serious level. In
            addition to that, I like to spend my time on reading, traveling and exploring new
            environments. I’m also interested in society and politics and have a penchant for
            quizzes and peanuts.
          </p>
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
  border-bottom: 2px groove ${purple};
  border-top: 2px groove ${purple};
  font-weight: 500;
  font-size: 32px;
  padding: 1.5rem 0;
  line-height: 1.6em;
  text-align: center;
  margin: 2rem auto;
  color: ${purple};
  width: 100%;
`

export default AboutPage
