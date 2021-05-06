import React from 'react'
import styled from 'styled-components'
import CodeIcon from '@material-ui/icons/Code'
import SettingsIcon from '@material-ui/icons/Settings'
import BrushIcon from '@material-ui/icons/Brush'
import BuildIcon from '@material-ui/icons/Build'

const SkillSubHeading = (props) => {

    const iconList = [ 
        {
            icon: <CodeIcon />,
            skill: "Languages"
        },
        {
            icon: <SettingsIcon />,
            skill: "Development"
        },
        {
            icon: <BuildIcon />,
            skill: "Tools"
        },
        {
            icon: <BrushIcon />,
            skill: "Design"
        },
    ]

    return (
        <Container>
            {iconList[props.title].icon}
            <Heading>{iconList[props.title].skill}</Heading>
        </Container>
    )
}

export default SkillSubHeading

const Container = styled.div `
    margin: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    /* background-color: lightblue; */
`

const Heading = styled.h1 `
    font-size: 20px;
    margin-left: 10px;
    padding: 10px 5px;
    /* background-color: lightyellow; */
`