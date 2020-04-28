import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { UlList } from '../styles/StyledComponents'
import { graphql, useStaticQuery } from 'gatsby'

const Projects = () => {
  const [projects, setProjects] = useState([])

  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        user(login:"emilpee") {
          pinnedItems(first: 3, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
              node {
                ... on GitHub_Repository {
                  name
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    projects.length !== 0 && (
      <UlList>
        <ProjectCard cardInfo={projects} />
      </UlList>
    )
  )
}

export default Projects
