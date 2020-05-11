import React from 'react'
import ProjectCard from './ProjectCard'
import { UlList } from '../styles/StyledComponents'
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

  return (
    <>
      <h2>Projects</h2>
      <UlList>
        <ProjectCard cardInfo={repoData} />
      </UlList>
    </>
  )
}

export default Projects
