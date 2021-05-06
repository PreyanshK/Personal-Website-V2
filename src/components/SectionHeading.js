import React from 'react'
import styled from 'styled-components'

const SectionHeading = (props) => {
    return (
        <HeadingContainer>
            <Wrapper>
                <Heading>
                    {props.title}
                </Heading>
                <UnderLine />
            </Wrapper>
        </HeadingContainer>
    )
}

export default SectionHeading

const HeadingContainer = styled.div `
    display: flex;
    justify-content: center;
`
// This wrapper allows me to horizontally center the heading and the underline
const Wrapper = styled.div `
`
const Heading = styled.h1 `
    font-size: 30px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 10px;
`
const UnderLine = styled.div `
    height: 3px;
    width: 80px;
    background-color: #29b6f6;
`