import React from 'react'
import {Nav, NavbarContainer, NavIcon, NavIcon2,MobileIcon, NavLink, Logo} from './NavbarElements'
import {GoMarkGithub} from 'react-icons/go';
import {ImLinkedin} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar({toggle}) {

    const [scrollY, setScrollY] = React.useState(0);

    function handleScroll() {
        setScrollY(window.pageYOffset);
      }

      React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <>
            <Nav scrollY={scrollY}>
                <Logo>Logo</Logo>
                <NavbarContainer>
                    <NavLink>
                        <Link to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        Home
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        O mnie
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        Technologie
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        Portfolio
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        Kontakt
                        </Link>
                    </NavLink>
                    <NavIcon>
                        <GoMarkGithub/>
                    </NavIcon>
                    <NavIcon>
                        <ImLinkedin/> 
                    </NavIcon>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
