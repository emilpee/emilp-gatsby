import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const NUMBER_OF_REPOS = 3

  useEffect(() => {
    fetch(`https://api.github.com/users/emilpee/repos?sort=updated`)
      .then(response => response.json())
      .then(data => {
        const getRepos = data.splice(0, NUMBER_OF_REPOS)
        setProjects(getRepos)
      })
      .catch(({ response }) => {
        throw new Error(response)
      })
  }, [])

  return (
    projects.length !== 0 && (
      <UlList>
        <ProjectCard cardInfo={projects} />
      </UlList>
    )
  )
}

const UlList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-decoration: none;
  align-items: center;
  padding: 0.75rem;
  margin: 0;

  @media screen and (max-width: 499px) {
    flex-direction: column;
    padding: 0;
  }
`

export default Projects
