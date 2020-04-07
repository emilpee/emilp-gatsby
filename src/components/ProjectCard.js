import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { vueGreen, jsYellow } from './Styles'

const ProjectCard = ({ cardInfo }) => {
  return cardInfo.map(info => {
    const { id, html_url, name, description, updated_at, language } = info
    return (
      <CardContainer key={id}>
        <CardItem
          title={`View ${name} on Github`}
          href={html_url}
          style={{ textDecoration: 'none' }}
        >
          <h3
            style={
              language === 'JavaScript'
                ? { color: jsYellow }
                : language === 'Vue'
                ? { color: vueGreen }
                : { color: '#222' }
            }
          >
            {name}
          </h3>
          <p>{description}</p>
          <small>Last updated {format(new Date(updated_at), 'dd MMMM yyyy')}</small>
        </CardItem>
      </CardContainer>
    )
  })
}

const CardContainer = styled.li`
  background: #fff;
  border: 1px thin #555;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #787878;
  height: 15rem;
  margin: 0.25rem;
  padding: 0.75rem;
  width: 100%;
`

const CardItem = styled.a`
  color: #222;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export default ProjectCard
