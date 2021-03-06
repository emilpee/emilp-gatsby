import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { black } from '../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from '../styles/GlobalStyledComponents'

const ProjectCard = ({ cardInfo }) => {
  const { edges } = cardInfo.github.user.pinnedItems

  return edges.map(info => {
    const { id, url, name, description, createdAt, languages } = info.node

    return (
      <CardContainer key={id}>
        <CardItem title={`View ${name} on Github`} href={url} target="_blank">
          <Header>
            <CardHeader style={{ color: languages.nodes[0].color }}>{name}</CardHeader>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              style={{ color: `${black}`, fontSize: '1.2em' }}
            />
          </Header>
          <Body>
            <small>{languages.nodes[0].name}</small>
            <Text style={{ fontSize: '0.8em' }}>{description}</Text>
            <small>
              <small>Created on {format(new Date(createdAt), 'MMMM d, yyyy')}</small>
            </small>
          </Body>
        </CardItem>
      </CardContainer>
    )
  })
}

const CardContainer = styled.li`
  background: #fff;
  border: solid thin #ddd;
  border-radius: 4px;
  height: 100%;
  cursor: pointer;
  padding: 0.75rem;
  transition: all 0.8s ease;

  &:hover {
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.6);
  }
`

const CardItem = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`

const CardHeader = styled.h3`
  font-family: 'Source Sans Pro-Regular', sans-serif;
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
