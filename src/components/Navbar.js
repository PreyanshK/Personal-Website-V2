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
    height: 5vh;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 5px -2px rgba(0,0,0,.2);
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        justify-content: center;
    }
`

const Logo = styled.a`
    color: #27282c;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5%;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-right: 20px;
    }
`

const NavList = styled.ul `
    display: flex;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        margin-right: 0;
    }
`

const NavItem = styled.a `
    color: #27282c;
    text-decoration: none;
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 15px;
        padding: 10px;
    }

    &.active {
        /* border-bottom: 3px solid #E29C22; */
        color: #E29C22;
    }

    &:hover {
        /* border-bottom: 3px solid #E29C22; */
        color: #E29C22;
    }
`