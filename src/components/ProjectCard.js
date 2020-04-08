import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { vueGreen, jsYellow } from './Styles'

const ProjectCard = ({ cardInfo }) => {
  return cardInfo.map(info => {
    const { id, html_url, name, description, updated_at, language } = info

    let color
    switch (language) {
      case 'JavaScript':
        color = jsYellow
        break
      case 'Vue':
        color = vueGreen
        break
      default:
        color = '#fff'
        break
    }

    return (
      <CardContainer key={id}>
        <CardItem title={`View ${name} on Github`} href={html_url}>
          <Header>
            <CardHeader style={{ color }}>{name}</CardHeader>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              style={{ color: '#222', fontSize: '1.2em' }}
            />
          </Header>
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
  min-height: 350px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`

const CardHeader = styled.h3`
  font-size: 1.25em;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default ProjectCard
