import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import projectsData from '../data/projectsData'

const Projects = () => {
    return (
        <PageContainer id="projects">
            <SectionHeading title="Projects" />

            <ProjectsWrapper>
                {projectsData.map( (project) => {
                    return (
                        <ProjectCard project={project} />
                    )
                })}
            </ProjectsWrapper>
        </PageContainer>
    )
}

export default Projects

const PageContainer = styled.section `
    padding: 40px;
    margin: auto;
`

const ProjectsWrapper = styled.div`
    margin: 30px auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    /* background-color: lightcoral; */
`