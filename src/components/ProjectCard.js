import React from "react"
import styled from "styled-components"
import { format } from "date-fns"

const CardContainer = styled.li`
  background: #fff;
  border: 1px thin #555;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #787878;
  padding: 1rem;
  min-width: 1000px;
`

const ProjectCard = ({ cardInfo }) => {
  return cardInfo.map(info => {
    const { id, html_url, name, description, updated_at, language } = info
    return (
      <CardContainer key={id}>
        <a
          title={`View ${name} on Github`}
          href={html_url}
          style={{ textDecoration: "none" }}
        >
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Last updated {format(new Date(updated_at), "dd MMMM yyyy")}</p>
          <span>{language}</span>
        </a>
      </CardContainer>
    )
  })
}

export default ProjectCard
