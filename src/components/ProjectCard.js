import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({ cardInfo }) => {
  const { edges } = cardInfo.github.user.pinnedItems
  
  return edges.map(info => {
    const { id, url, name, description, updatedAt, languages } = info.node

    return (
      <CardContainer key={id}>
        <CardItem title={`View ${name} on Github`} href={url} target="_blank">
          <Header>
            <CardHeader style={{ color: languages.nodes[0].color }}>{name}</CardHeader>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              style={{ color: '#222', fontSize: '1.2em' }}
            />
          </Header>
          <Body>
            <small>{languages.nodes[0].name}</small>
            <p>{description}</p>
            <small>
              <span>Last updated {format(new Date(updatedAt), 'd MMMM yyyy')}</span>
            </small>
          </Body>
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

const Body = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 10;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default ProjectCard
