import React from 'react';
import styled from 'styled-components';
import ContactIcons from './ContactIcons';

const AboutInfo = () => {
  return (
    <AboutContainer>
      <BoldText>Hey! I’m Preyansh 👋</BoldText>

      <AboutText>
        I'm a recent UWaterloo Grad, working as a{' '}
        <HighlightWords>Software Engineer @ Intuit</HighlightWords>.
      </AboutText>

      <AboutText>
        I love designing and building apps on the web. Lately, I’ve been diving
        into the world of Agentic AI, Gen AI, and LLMs — just exploring what’s
        next and tinkering with cool ideas on the side.
      </AboutText>

      <AboutText>
        When I’m not in front of my computer, you'll find me at the gym 💪,
        trying out new recipes 👨‍🍳, or chasing sunsets with my camera. 📸
      </AboutText>

      <IconContainer>
        <ContactIcons />
      </IconContainer>
    </AboutContainer>
  );
};

export default AboutInfo;

const AboutContainer = styled.div`
  margin: 40px;
  max-width: 960px;
  text-align: left;
`;

const AboutText = styled.p`
  font-size: 16px;
`;

const BoldText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const HighlightWords = styled.span`
  color: #418cea;
  font-weight: bold;
`;

const IconContainer = styled.div`
  /* background-color: lightblue; */
  width: 100%;
  display: flex;
  justify-content: start;
`;
