import React from 'react'
import styled from 'styled-components'

const ExperienceCard = (props) => {

    return (
        <CardContainer>
          <CompanyWrapper>
            <CompanyImg src={props.experience.image[0]}/>
          </CompanyWrapper>

          <InfoContainer>
              <Company>{props.experience.company}</Company>
              <Role>{props.experience.title}</Role>
              <Date>{props.experience.date}</Date>

            <DescriptionContainer>
              {props.experience.bullets.map((item) => {
                return(
                  <BulletItem>{item}</BulletItem>
                )
              })}
            </DescriptionContainer>
          </InfoContainer>

          <TechContainer>
            {props.experience.tools.map((item) => {
              return (
                <Tech>{item}</Tech>
              )
            })}
          </TechContainer>

        </CardContainer>
    )
}

export default ExperienceCard

const CardContainer = styled.div `
  margin: 20px;
  min-width: 275px;
  max-width: 345px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0px -2px 15px 0px rgba(0,0,0,.2);
`

const CompanyWrapper = styled.div `
  border-radius: 8px 8px 0 0;
  background-color: #F0F0F0;
`

const CompanyImg = styled.img `
  max-width: 250px;
  margin: 10px auto;
  padding: 10px;
`

const InfoContainer = styled.div`
  padding: 10px 20px;
  text-align: left;
`

const Company = styled.h1 `
  font-size: 22px;
  margin-top: 15px;
`

const Role = styled.p `
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
`

const Date = styled.p `
  margin-top: 0px;
`

const DescriptionContainer = styled.div `
  text-align: left;
`

const BulletItem = styled.p `
  /* margin: 10px; */
  color: #757575;
`

const TechContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
`

const Tech = styled.a `
    color: #555555;
    background: #f0f0f0;
    padding: 7px;
    margin: 10px 15px 5px 0px;
    background: #f0f0f0;
    border-radius: 4px;
    font-size: 15px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #29b6f6;
    }
`