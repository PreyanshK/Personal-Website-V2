import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../components/ExperienceCard'
import SectionHeading from '../components/SectionHeading'
import experienceData from '../data/experienceData'

const Experience = () => {
    return (
        <PageContainer id="experience">
            <SectionHeading title="Experience" />

            <ExperienceWrapper>
                {experienceData.map( (career) => {
                    return (
                        <ExperienceCard experience={career} />
                    )
                })}
            </ExperienceWrapper>
        </PageContainer>
    )
}

export default Experience


const PageContainer = styled.section `
    padding: 40px;
    margin: auto;
    /* background-color: lightgreen; */
`

const ExperienceWrapper = styled.div`
    margin: 30px auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    /* background-color: lightcoral; */
`



