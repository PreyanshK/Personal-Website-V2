import React from 'react'
import styled from 'styled-components'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SectionHeading title="Skills"/>

            <SkillsWrapper>
                    <SkillCard title={0}/>
                    <SkillCard title={1}/>
                    <SkillCard title={2}/>
                    <SkillCard title={3}/>
            </SkillsWrapper>

        </SkillsContainer>
    )
}

export default Skills

const SkillsContainer = styled.section `
    padding: 40px;
    margin: auto;
    /* background-color: lightcoral; */
`

const SkillsWrapper = styled.div `
    margin: 30px auto;  
    max-width: 1200px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* background-color: lightgreen; */
`


