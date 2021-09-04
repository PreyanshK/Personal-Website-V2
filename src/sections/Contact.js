import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import ContactIcons from '../components/ContactIcons';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionHeading title="Get In Touch" />

      <InfoWrapper>
        <Text>Whether you have any questions, or just want to say 'hi' 👋</Text>
        <Text>My inbox is always open for a chat</Text>
      </InfoWrapper>

      <IconContainer>
        <ContactIcons />
      </IconContainer>

      <Copyright>&copy; Preyansh Kachhia {new Date().getFullYear()}</Copyright>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #eeeeee;
  height: 400px;
`;

const InfoWrapper = styled.div`
  max-width: 600px;
  margin: 0px 30px;
`;

const Text = styled.p`
  color: #555555;
  font-size: 20px;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Copyright = styled.p`
  color: #555555;
`;
