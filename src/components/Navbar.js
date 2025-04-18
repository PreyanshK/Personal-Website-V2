import React from 'react';
import styled from 'styled-components';
import PK_Logo from '../images/PK_Final.PNG';

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer href='#home'>
        <Logo src={PK_Logo}></Logo>
      </LogoContainer>
      <NavList>
        <NavItem href='#about'>About</NavItem>
        <NavItem href='#skills'>Skills</NavItem>
        <NavItem href='#experience'>Experience</NavItem>
        <NavItem href='#projects'>Projects</NavItem>
        <NavItem href='#contact'>Contact</NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 768px) {
    justify-content: center;
    transition: 0.8s all ease;
  }
`;

const LogoContainer = styled.a`
  /* color: #27282c; */
  /* font-size: 25px; */
  margin-left: 5%;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* background-color: lightgreen; */

  @media screen and (max-width: 768px) {
    display: none;
    font-size: 20px;
    margin-left: 1%;
  }
`;

const Logo = styled.img`
  width: 40px;
  margin: 40px;
`;

const NavList = styled.div`
  display: flex;
  margin-right: 5%;

  @media screen and (max-width: 768px) {
    margin-right: 1%;
  }
`;

const NavItem = styled.a`
  color: #27282c;
  text-decoration: none;
  padding: 15px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* background-color: lightblue; */

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  @media screen and (max-width: 500px) {
    padding: 8px;
    font-size: 15px;
  }

  &:hover {
    color: #418cea;
  }
`;
