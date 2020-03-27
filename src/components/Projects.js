import React, { useEffect, useState } from "react"
import { UlList } from "./StyledComponents"
import ProjectCard from "./ProjectCard"

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
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (projects) {
    return projects.map(project => {
      const { id, description, html_url, name, language } = project
      return (
        <UlList key={id}>
          <ProjectCard
            title={name}
            language={language}
            url={html_url}
            description={description}
          />
        </UlList>
      )
    })
  }
}

export default Projects
