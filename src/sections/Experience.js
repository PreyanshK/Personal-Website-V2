import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../components/ExperienceCard'
import SectionHeading from '../components/SectionHeading'

const Experience = () => {
    return (
        <PageContainer id="experience">
            <SectionHeading title="Experience" />

            <ExperienceWrapper>
                <ExperienceCard />
            </ExperienceWrapper>
        
        </PageContainer>
    )
}

export default Experience


const PageContainer = styled.section `
    padding: 40px;
    margin: auto;
    height: 600px;
    background-color: lightgreen;
`

const ExperienceWrapper = styled.div`
    margin: 30px auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    background-color: lightcoral;
`



