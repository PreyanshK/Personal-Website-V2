import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const ContactIcons = () => {
  const iconsList = [
    {
      icon: <MailOutlineIcon />,
      url: 'mailto:pkachhia@uwaterloo.ca',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/preyansh-kachhia-29b0a0194',
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/preyansh.k/?hl=en',
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/PreyanshK',
    },
  ];

  return (
    <IconsContainer>
      {iconsList.map((icon) => {
        return (
          <ButtonWrapper>
            <IconButton size='large' href={icon.url} target='_blank'>
              {icon.icon}
            </IconButton>
          </ButtonWrapper>
        );
      })}
    </IconsContainer>
  );
};

export default ContactIcons;

const IconsContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: lightcoral; */
`;

const ButtonWrapper = styled.div`
  padding: 15px 0;
  padding-left: 0;
`;
