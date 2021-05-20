import React from 'react'
import styled from 'styled-components'
import ContactIcons from './ContactIcons'

const AboutInfo = () => {
    return (
        <AboutContainer>    
            <AboutText>
                Hi there! I’m <HighlightWords>Preyansh Kachhia</HighlightWords>. I’m a second year <HighlightWords>Computer Engineering </HighlightWords> 
                student at the <HighlightWords>University of Waterloo.</HighlightWords>
            </AboutText>

            <AboutText>
                I love designing and buildling apps on the web.
                I'm currently exploring mobile development, machine learning and DevOps.
            </AboutText>

            <AboutText>
                When I’m not in front of my computer, I'm probably working out, playing basketball, or watching Netflix!
            </AboutText>

            <IconContainer>
                <ContactIcons />
            </IconContainer>  
        </AboutContainer>
    )
}

export default AboutInfo

const AboutContainer = styled.div `
    margin: 40px;
    text-align: left;
`

const AboutText = styled.p `
    font-size: 16px; 
`

const HighlightWords = styled.span `
    color: #4AC7DD;
    font-weight: bold;
`

const IconContainer = styled.div `
    /* background-color: lightblue; */
    width: 100%;
    display: flex;
    justify-content: start;
`
