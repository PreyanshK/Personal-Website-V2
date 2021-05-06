import React from 'react'
import styled from 'styled-components'
import SkillSubHeading from '../components/SkillSubHeading'
import skillList from '../data/skillList'

const SkillCard = (props) => {

    return (
        <Container>
            <SkillSubHeading title={props.title}/>
            <IconContainer>
                {skillList[props.title].map((skill) => {
                    return(
                        <Item>
                            {skill}
                        </Item>
                    )
                })}
            </IconContainer>
        </Container>
    )
}

export default SkillCard

const Container = styled.div`
    width: 200px;
    /* background-color: lightcoral; */
`

const IconContainer = styled.div `
    width: 150px;
    margin-left: 40px;
    /* background-color: lightblue; */
`

const Item = styled.p `
    text-align: left;
`

