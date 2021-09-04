import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import HomeBG from '../images/minimal_mountain.png';

const LandingPage = () => {
  return (
    <HomeContainer id="home">
      <HomeText>
        <HeadingOne>Hi, I'm Preyansh</HeadingOne>

        <HeadingTwo>
          <Typewriter
            options={{
              strings: [
                'Software Developer',
                'UI/UX Designer',
                'Tech Enthusiast',
                'Artist',
                'Fitness Enthusiast',
                'Photographer',
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
  background: url(${HomeBG});
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* fixed = parallax effect*/
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const HomeContent = styled.div`
//     display: flex;
//     justify-content: center;
//     background-color: lightyellow;
//     /* padding: 30px; */

//     @media screen and (max-width: 1000px) {
//         flex-direction: column;
//     }
// `

const HomeText = styled.div`
  width: 600px;
  color: #3d1f04;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: lightcoral; */

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

const HeadingOne = styled.h1`
  margin: 0;
  padding: 10px;
  font-size: 50px;
  font-weight: 300;
  /* background-color: lightgreen; */

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const HeadingTwo = styled.h1`
  font-size: 40px;
  font-weight: 500;
  /* background-color: lightblue; */

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

// const HomeImgContainer = styled.div`
//     background-color: lightgreen;
//     margin-right: 5%;

//     img {
//         width: 35vh;
//     }

//     @media screen and (max-width: 768px) {
//         margin-right: 0;
//         margin-bottom: 10vh;

//         img {
//             height: 30vh;
//         }
//     }
// `
