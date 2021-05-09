import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ProjectCard = (props) => {
    return (
        <CardContainer>
            <ProjectImg src={props.project.image[0]}/>

          <InfoContainer>
            <Title>{props.project.name}</Title>
            <Description>{props.project.desc}</Description>
          </InfoContainer>

          <TechContainer>
            {props.project.tech.map((item) => {
              return (
                <Tech>{item}</Tech>
              )
            })}
          </TechContainer>

          <ButtonContainer>
            <IconButton href={props.project.gitHub} target="_blank" variant="outlined"><GitHubIcon/></IconButton>
            <IconButton href={props.project.project} target="_blank" variant="outlined"><LaunchIcon /></IconButton>
          </ButtonContainer>
        </CardContainer>
    )
}

export default ProjectCard

const CardContainer = styled.div`
  margin: 20px;
  min-width: 275px;
  max-width: 345px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0px -2px 15px 0px rgba(0,0,0,.2);
`

const ProjectImg = styled.img`
    max-width: 345px;
    max-height: 250px;
`

const InfoContainer = styled.div`
    padding: 15px;
    text-align: left;
`

const Title = styled.h1`
    font-size: 20px;
    margin-left: 10px;
`

const Description = styled.div`
    margin: 10px;
    color: #757575;
`

const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
`

const Tech = styled.div`
    color: #555555;
    background: #f0f0f0;
    padding: 7px;
    margin: 10px 5px 5px 5px;
    background: #f0f0f0;
    border-radius: 4px;
    font-size: 15px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #29b6f6;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 15px;
`