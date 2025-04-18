import React from 'react';
import styled from 'styled-components';
import AboutInfo from '../components/AboutInfo';
import ProfileImg from '../components/ProfileImg';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <AboutContainer id='about'>
      <SectionHeading title='About Me' />
      <AboutWrapper>
        <AboutContent>
          <ProfileImg />
          <AboutInfo />
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  padding: 40px;
`;

// This wrapper allows me to horizontally center the About content
const AboutWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutContent = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
