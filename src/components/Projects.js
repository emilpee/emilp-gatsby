import React, { useEffect, useState } from "react"
import { UlList } from "./StyledComponents"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const NUMBER_OF_REPOS = 6

  useEffect(() => {
    fetch(`https://api.github.com/users/emilpee/repos?sort=updated`)
      .then(response => response.json())
      .then(data => {
        const getRepos = data.splice(0, NUMBER_OF_REPOS)
        console.log(getRepos)
        setProjects(getRepos)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (projects) {
    return projects.map(project => {
      const { id, description, html_url, name } = project
      return (
        <UlList key={id}>
          <li>
            <a target="_blank" href={html_url}>
              <h3>{name}</h3>
            </a>
          </li>
        </UlList>
      )
    })
  }
}

export default Projects
