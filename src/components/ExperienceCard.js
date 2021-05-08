import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( {
  root: {
    maxWidth: 345,
  },
})

const ExperienceCard = (props) => {
    const cardStyling = useStyles();

    return (
        <div>
            <Card className={cardStyling.root} >
              <CompanyWrapper>
                <CompanyImg>
                  {/* get img property from data file (props) */}
                </CompanyImg>
              </CompanyWrapper>

              <InfoContainer>
                <Title></Title>
                <Role></Role>
                <Date></Date>

                <Description>
                  <BulletItem>{/* map function to get bullet property from data files (props) */}</BulletItem>
                  <BulletItem>{/* map function to get bullet property from data files (props) */}</BulletItem>
                  <BulletItem>{/* map function to get bullet property from data files (props) */}</BulletItem>
                </Description>
              </InfoContainer>

              <TechContainer>
                <Tech>{/* map function for the technologies used */}</Tech>
                <Tech>{/* map function for the technologies used */}</Tech>
                <Tech>{/* map function for the technologies used */}</Tech>  
              </TechContainer>

            </Card>
        </div>
    )
}

export default ExperienceCard

const CompanyWrapper = styled.div `

`

const CompanyImg = styled.img `

`

const InfoContainer = styled.div`

`

const Title = styled.h1 `

`

const Role = styled.p `

`

const Date = styled.p `

`

const Description = styled.div `

`

const BulletItem = styled.p `

`

const TechContainer = styled.div `

`

const Tech = styled.a `

`
