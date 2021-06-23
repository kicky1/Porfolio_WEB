import React from 'react'
import {Nav, NavbarContainer, NavIcon, NavIcon2, NavItem, NavMenu, NavLinks, MobileIcon} from './NavbarElements'
import {GoMarkGithub} from 'react-icons/go';
import {ImLinkedin} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavIcon>
                        <GoMarkGithub/>
                    </NavIcon>
                    <NavIcon2>
                        <ImLinkedin/> 
                    </NavIcon2>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>O mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Kontkat</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
