import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { UlList } from '../styles/StyledComponents'

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

export default Projects
