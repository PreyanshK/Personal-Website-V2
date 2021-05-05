import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import HomeImg_1 from '../images/sitting-on-desk.svg'
import HomeImg_2 from '../images/resting-on-iphone.svg'
import HomeImg_3 from '../images/home-desk.svg'
import HomeBG from '../images/minimal_mountain.png'

const LandingPage = () => {
    return (
        <HomeContainer>
            {/* <HomeContent> */}
                <HomeText>
                    <HeadingOne>Hi, I'm Preyansh</HeadingOne>

                    <HeadingTwo>
                        
                        <Typewriter
                            options={{
                                strings: [
                                    'Software Developer', 
                                    'UI/UX Designer', 
                                    'Tech Enthusiast',
                                    'Raptors Fan',
                                    'Fitness Enthusiast',
                                    'Foodie'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </HeadingTwo>
                </HomeText>

                {/* <HomeImgContainer>
                    <img src={HomeImg_3} alt="Home Image"/>
                </HomeImgContainer> */}
            {/* </HomeContent>        */}
        </HomeContainer>

        // <div className="HomeContainer">
        //     <div className="HeadingContainer">
        //         <h1 className="HeadingOne">Hi, I'm Preyansh</h1>

        //         <h1 className="HeadingTwo">Hi, I'm a
        //             <Typewriter
        //                 options={{
        //                     strings: [
        //                         'Software Developer', 
        //                         'UI/UX Designer', 
        //                         'Tech Enthusiast',
        //                         'Toronto Raptors Fan',
        //                         'Gym Enthusiast',
        //                     ],
        //                     autoStart: true,
        //                     loop: true,
        //                 }}
        //             />
        //         </h1>
        //     </div>
        // </div>
    )
}

export default LandingPage


const HomeContainer = styled.section`
    background: url(${HomeBG});
    position: relative;
    height: 95vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* fixed = parallax effect*/
    display: flex;
    justify-content: center;
    align-items: center;
`

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
    color: #3D1F04;
    /* text-align: left; */
    display: flex;
    flex-direction: column;
    /* background-color: lightcoral; */
    justify-content: space-evenly;
    /* align-items: center; */
    
    @media screen and (max-width: 768px) {
        width: 400px;
        /* flex: 0.5;    */
    } 
`

const HeadingOne = styled.h1 `
    font-size: 50px;    
    font-weight: 300;
    /* background-color: lightgreen; */

    @media screen and (max-width: 768px) {
        font-size: 30px;  
    }
`

const HeadingTwo = styled.h1 `
    font-size: 40px;
    font-weight: 500;
    /* background-color: lightblue; */

    @media screen and (max-width: 768px) {
        font-size: 30px;  
    }
`

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