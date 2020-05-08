import React from 'react'
import { Container } from '../styles/StyledComponents'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProfileImage from '../components/ProfileImage'

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <SEO title="about" />
        <h1>About me</h1>
        <ProfileImage />
        <p>
          Löksås ipsum hav gör dag själv precis från bäckasiner hav samma, och mot mjuka att se helt
          omfångsrik gamla och ingalunda, sista sax sällan tre som dock ingalunda kunde sällan.
          Stora jäst dock jäst där och på sjö rot, tid bäckasiner annat ta inom tre år för, färdväg
          sin stig kom fram se tiden. Vi så vidsträckt upprätthållande har ta strand sitt nu både
          ännu, hwila varit smultron sällan tre tid färdväg vidsträckt därmed äng samma, dock strand
          det se trevnadens göras färdväg genom trevnadens.
        </p>
      </Container>
    </Layout>
  )
}

export default AboutPage
