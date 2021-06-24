import React from 'react'
import {Nav, NavbarContainer, NavIcon, NavIcon2,MobileIcon} from './NavbarElements'
import {GoMarkGithub} from 'react-icons/go';
import {ImLinkedin} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';

function Navbar({toggle}) {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavIcon>
                        <GoMarkGithub/>
                    </NavIcon>
                    <NavIcon2>
                        <ImLinkedin/> 
                    </NavIcon2>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
