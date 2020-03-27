import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  border: 1px thin #555;
  background: #fff;
  padding: 1rem;
  min-width: 1000px;
`

const ProjectCard = ({ url, title, description, language, test }) => {
  return (
    <CardContainer>
      <a href={url} style={{ textDecoration: "none" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{language}</span>
      </a>
    </CardContainer>
  )
}

export default ProjectCard
