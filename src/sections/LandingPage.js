import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Yosemite from '../images/yosemite-preyansh-landing.jpg';

const LandingPage = () => {
  return (
    <HomeContainer id='home'>
      <HomeText>
        <HeadingOne>Hi, I'm Preyansh</HeadingOne>

        <HeadingTwo>
          <Typewriter
            options={{
              strings: [
                'Software Engineer',
                'UI/UX Designer',
                'Photographer',
                'Fitness Enthusiast',
                'Artist',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </HeadingTwo>
      </HomeText>
    </HomeContainer>
  );
};

export default LandingPage;

const HomeContainer = styled.section`
  background: url(${Yosemite});
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* fixed = parallax effect*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeText = styled.div`
  width: 600px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

const HeadingOne = styled.h1`
  margin: 0;
  padding: 10px;
  font-size: 40px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const HeadingTwo = styled.h1`
  font-size: 60px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
