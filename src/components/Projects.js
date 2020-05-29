import React from 'react'
import ProjectCard from './ProjectCard'
import { UlList } from '../styles/StyledComponents'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Projects = () => {
  const repoData = useStaticQuery(graphql`
    query {
      github {
        user(login: "emilpee") {
          pinnedItems(first: 5, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
              node {
                ... on GitHub_Repository {
                  id
                  name
                  updatedAt
                  description
                  url
                  languages(last: 1, orderBy: { direction: ASC, field: SIZE }) {
                    nodes {
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const ProjectCardList = styled(UlList)`
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 250px);

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, auto);
      grid-row-gap: 2rem;
      grid-template-rows: repeat(2, 250px);
    }
  `

  return (
    <>
      <h2>Projects</h2>
      <ProjectCardList>
        <ProjectCard cardInfo={repoData} />
      </ProjectCardList>
    </>
  )
}

export default Projects
