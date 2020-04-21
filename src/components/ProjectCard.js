import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { purple } from '../styles/Styles'

const ProjectCard = ({ cardInfo }) => {
  return cardInfo.map(info => {
    const { id, html_url, name, description, updated_at } = info

    return (
      <CardContainer key={id}>
        <CardItem title={`View ${name} on Github`} href={html_url}>
          <Header>
            <CardHeader style={{ color: purple }}>{name}</CardHeader>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              style={{ color: '#222', fontSize: '1.2em' }}
            />
          </Header>
          <p>{description}</p>
          <small>Last updated {format(new Date(updated_at), 'd MMMM yyyy')}</small>
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
  cursor: pointer;
  margin: 0.25rem;
  padding: 0.75rem;
  transition: all 0.8s ease;
  width: 100%;

  &:hover {
    background: #fef;
  }
`

const CardItem = styled.a`
  color: #222;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`

const CardHeader = styled.h3`
  font-size: 1.25em;
  margin: 0;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default ProjectCard
