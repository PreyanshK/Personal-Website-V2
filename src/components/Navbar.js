import React from 'react'
import styled from "styled-components"

const Navbar = () => {
    return (
        <NavContainer>
            <Logo href="#home">PK</Logo>
            <NavList>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#skills">Skills</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#projects">Projects</NavItem>
                <NavItem href="#contact">Contact</NavItem>
            </NavList>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 5px -2px rgba(0,0,0,.2);
    position: fixed;
    z-index: 100;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`

const Logo = styled.a`
    color: #27282c;
    font-size: 25px;
    margin-left: 5%;
    text-decoration: none;
    cursor: pointer;
    /* background-color: lightgreen; */

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-left: 1%;
    }
`

const NavList = styled.div `
    display: flex;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        margin-right: 1%;
    }
`

const NavItem = styled.a `
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

    &.active {
        color: #29b6f6;
    }

    &:hover {
        color: #29b6f6;
    }
`